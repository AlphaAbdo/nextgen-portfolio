const express = require('express');
const cors = require('cors');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all origins (adjust as needed)
app.use(cors());

// Single proxy endpoint with redirect handling
app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;
  const maxRedirects = 5; // Prevent infinite redirect loops

  // Basic validation
  if (!targetUrl) {
    return res.status(400).json({ error: 'URL parameter required' });
  }

  try {
    await makeRequest(targetUrl, res, maxRedirects);
  } catch (error) {
    console.error('Proxy request failed:', error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Request failed', message: error.message });
    }
  }
});

/**
 * Make HTTP request with redirect handling
 */
async function makeRequest(url, res, maxRedirects, redirectCount = 0) {
  if (redirectCount >= maxRedirects) {
    throw new Error(`Too many redirects (${maxRedirects})`);
  }

  console.log(`🌐 Making request to: ${url} (redirect ${redirectCount}/${maxRedirects})`);

  const parsedUrl = new URL(url);
  const protocol = parsedUrl.protocol === 'https:' ? https : http;

  return new Promise((resolve, reject) => {
    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache'
      }
    }, (response) => {
      console.log(`📡 Response status: ${response.statusCode} from ${url}`);

      // Handle redirects (3xx status codes)
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        console.log(`🔄 Redirect ${redirectCount + 1}/${maxRedirects}: ${response.statusCode} -> ${response.headers.location}`);

        // Clean up the current response
        response.destroy();

        // Follow the redirect
        const redirectUrl = response.headers.location;
        let absoluteUrl;

        try {
          // Try to resolve relative URLs
          absoluteUrl = redirectUrl.startsWith('http') ? redirectUrl : new URL(redirectUrl, url).href;
        } catch (urlError) {
          console.error(`❌ Invalid redirect URL: ${redirectUrl}`);
          reject(new Error(`Invalid redirect URL: ${redirectUrl}`));
          return;
        }

        console.log(`🎯 Following redirect to: ${absoluteUrl}`);

        makeRequest(absoluteUrl, res, maxRedirects, redirectCount + 1)
          .then(resolve)
          .catch(reject);
        return;
      }

      // Handle successful responses
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log(`✅ Success: ${response.statusCode} - ${response.headers['content-type'] || 'unknown content type'}`);
      } else {
        console.log(`⚠️ Non-success status: ${response.statusCode}`);
      }

      // Set CORS headers
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-Control-Allow-Methods', 'GET');

      // Forward the content type
      if (response.headers['content-type']) {
        res.set('Content-Type', response.headers['content-type']);
      }

      // Set status code
      res.status(response.statusCode);

      // Pipe the response directly (no buffering)
      response.pipe(res);

      response.on('end', () => {
        console.log(`📄 Response completed for: ${url}`);
        resolve();
      });

      response.on('error', (error) => {
        console.error(`❌ Response error for ${url}:`, error);
        reject(error);
      });
    });

    // Handle request errors
    request.on('error', (error) => {
      console.error(`❌ Request error for ${url}:`, error);
      reject(error);
    });

    // Handle timeout
    request.setTimeout(15000, () => {
      console.error(`⏰ Request timeout for ${url}`);
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
  console.log(`Use: http://localhost:${PORT}/proxy?url=YOUR_URL_HERE`);
});

module.exports = app;