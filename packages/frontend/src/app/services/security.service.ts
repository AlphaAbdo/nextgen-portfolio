import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() {
    this.initSecurityFeatures();
  }

  private initSecurityFeatures(): void {
    // Content Security Policy via meta tag (for client-side)
    this.addCSPMetaTag();
    
    // Feature Policy
    this.setFeaturePolicy();
  }

  private addCSPMetaTag(): void {
    if (typeof document !== 'undefined') {
      const existingCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!existingCSP) {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Security-Policy';
        meta.content = `
          default-src 'self';
          script-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          font-src 'self' https://fonts.gstatic.com;
          img-src 'self' data: https:;
          connect-src 'self';
          media-src 'self';
          object-src 'none';
          frame-src 'none';
          worker-src 'self';
          form-action 'self';
          upgrade-insecure-requests;
        `.replace(/\s+/g, ' ').trim();
        
        document.head.appendChild(meta);
      }
    }
  }

  private setFeaturePolicy(): void {
    if (typeof document !== 'undefined') {
      const existingFP = document.querySelector('meta[http-equiv="Permissions-Policy"]');
      if (!existingFP) {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Permissions-Policy';
        meta.content = 'camera=(), microphone=(), geolocation=(), payment=()';
        document.head.appendChild(meta);
      }
    }
  }

  // Sanitize user input (basic XSS prevention)
  sanitizeInput(input: string): string {
    if (!input) return '';
    
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  // Validate email format
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Rate limiting for form submissions
  private submissionTimes: number[] = [];

  canSubmitForm(): boolean {
    const now = Date.now();
    const fiveMinutesAgo = now - 5 * 60 * 1000;
    
    // Remove old submissions
    this.submissionTimes = this.submissionTimes.filter(time => time > fiveMinutesAgo);
    
    // Allow max 3 submissions per 5 minutes
    if (this.submissionTimes.length >= 3) {
      return false;
    }
    
    this.submissionTimes.push(now);
    return true;
  }
}
