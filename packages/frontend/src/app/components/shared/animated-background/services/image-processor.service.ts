import { Injectable } from '@angular/core';

export interface ImagePoint {
  x: number;
  y: number;
  intensity: number;
  isEdge?: boolean;
}

export interface ProcessedImage {
  points: ImagePoint[];
  width: number;
  height: number;
  originalUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageProcessorService {
  
  /**
   * Process an image and extract points for particle formation
   */
  async processImageForParticles(
    imageUrl: string, 
    maxPoints: number = 200,
    detectionMode: 'edge' | 'filled' | 'artistic' | 'silhouette' | 'contrast' | 'hybrid' | 'edge-image' = 'edge'
  ): Promise<ProcessedImage> {
    try {
      const img = await this.loadImage(imageUrl);
      
      // For edge-image mode, preserve original resolution for maximum precision
      const preserveResolution = (detectionMode === 'edge-image');
      const canvas = this.createOffscreenCanvas(img, preserveResolution);
      const imageData = this.getImageData(canvas, img);
      
      let points: ImagePoint[];
      
      if (detectionMode === 'edge-image') {
        points = this.extractFromEdgeImage(imageData);
      } else {
        points = this.extractEdgePoints(imageData);
      }
      
      // For edge-image mode, use ALL points for maximum detail
      let optimizedPoints: ImagePoint[];
      if (detectionMode === 'edge-image') {
        optimizedPoints = points; // Use ALL points, no sampling!
      } else {
        optimizedPoints = this.optimizePointDistribution(points, maxPoints);
      }
      
      return {
        points: optimizedPoints,
        width: img.width,
        height: img.height,
        originalUrl: imageUrl
      };
      
    } catch (error) {
      throw new Error(`Failed to process image: ${imageUrl}`);
    }
  }
  
  /**
   * Load image with promise wrapper
   */
  private loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.crossOrigin = 'anonymous';
      img.src = url;
    });
  }
  
  /**
   * Create offscreen canvas for image processing
   */
  private createOffscreenCanvas(img: HTMLImageElement, preserveOriginalSize: boolean = false): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    
    if (preserveOriginalSize) {
      // Use original image dimensions for maximum detail
      canvas.width = img.width;
      canvas.height = img.height;
    } else {
      // Scale down for performance
      const maxSize = 300;
      const scale = Math.min(maxSize / img.width, maxSize / img.height);
      canvas.width = Math.floor(img.width * scale);
      canvas.height = Math.floor(img.height * scale);
    }
    
    return canvas;
  }
  
  /**
   * Get image data from canvas
   */
  private getImageData(canvas: HTMLCanvasElement, img: HTMLImageElement): ImageData {
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  }
  
  /**
   * Extract edge points using basic edge detection
   */
  private extractEdgePoints(imageData: ImageData): ImagePoint[] {
    const points: ImagePoint[] = [];
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const pixelIndex = (y * width + x) * 4;
        const r = data[pixelIndex];
        const g = data[pixelIndex + 1];
        const b = data[pixelIndex + 2];
        const brightness = (r + g + b) / 3;
        
        if (brightness < 200) { // Dark pixels are potential edges
          points.push({
            x: x,
            y: y,
            intensity: 255 - brightness,
            isEdge: true
          });
        }
      }
    }
    
    return points;
  }
  
  /**
   * Extract points from pre-processed edge image (Sobel detected)
   */
  private extractFromEdgeImage(imageData: ImageData): ImagePoint[] {
    const points: ImagePoint[] = [];
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;

  // Processing every pixel for maximum precision
    
    // Process EVERY pixel for maximum detail
    const threshold = 255; // Accept everything except pure white (255)
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pixelIndex = (y * width + x) * 4;
        const r = data[pixelIndex];
        const g = data[pixelIndex + 1];
        const b = data[pixelIndex + 2];
        const a = data[pixelIndex + 3];
        
        if (a < 5) continue; // Skip transparent pixels
        
        const brightness = (r + g + b) / 3;
        
        // Accept EVERYTHING except pure white for maximum detail
        if (brightness < threshold) {
          points.push({
            x: x,
            y: y,
            intensity: 255 - brightness,
            isEdge: true
          });
        }
      }
    }

  // Extracted points from edge image
    return points;
  }
  
  /**
   * Basic point optimization (not used for edge-image mode)
   */
  private optimizePointDistribution(points: ImagePoint[], maxPoints: number): ImagePoint[] {
    if (points.length <= maxPoints) {
      return points;
    }
    
    // Simple random sampling for other modes
    const step = Math.floor(points.length / maxPoints);
    const optimized: ImagePoint[] = [];
    
    for (let i = 0; i < points.length && optimized.length < maxPoints; i += step) {
      optimized.push(points[i]);
    }
    
    return optimized;
  }

  /**
   * Scale points to canvas coordinates (needed by celestial formation)
   */
  scalePointsToCanvas(
    points: ImagePoint[],
    sourceWidth: number,
    sourceHeight: number,
    targetX: number,
    targetY: number,
    targetWidth: number,
    targetHeight: number
  ): ImagePoint[] {
    const scaleX = targetWidth / sourceWidth;
    const scaleY = targetHeight / sourceHeight;
    
    return points.map(point => ({
      x: targetX + (point.x * scaleX),
      y: targetY + (point.y * scaleY),
      intensity: point.intensity,
      isEdge: point.isEdge
    }));
  }
}