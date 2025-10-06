import { Injectable, isDevMode } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Service to handle and sanitize error messages across the application.
 * Provides user-friendly error messages while hiding technical details in production.
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  
  /**
   * Sanitize error message to remove sensitive information like URLs, ports, etc.
   * In production, returns generic user-friendly messages.
   * In development, includes more details for debugging.
   * 
   * @param error - The error object from HTTP call or catch block
   * @param context - Context about what failed (e.g., 'portfolio data', 'profile information')
   * @returns User-friendly error message
   */
  sanitizeError(error: any, context: string = 'data'): string {
    // Log full error in dev mode for debugging
    if (isDevMode()) {
      console.error(`[ErrorHandler] Error loading ${context}:`, error);
    }

    // Handle HttpErrorResponse
    if (error instanceof HttpErrorResponse) {
      return this.handleHttpError(error, context);
    }

    // Handle Error objects
    if (error instanceof Error) {
      return this.handleGenericError(error, context);
    }

    // Handle string errors
    if (typeof error === 'string') {
      return this.handleStringError(error, context);
    }

    // Fallback for unknown error types
    return this.getGenericMessage(context);
  }

  /**
   * Handle HTTP error responses
   */
  private handleHttpError(error: HttpErrorResponse, context: string): string {
    // Network/Connection errors (no response from server)
    if (error.status === 0) {
      return `Unable to connect. Please check your internet connection and try again.`;
    }

    // Client errors (4xx)
    if (error.status >= 400 && error.status < 500) {
      switch (error.status) {
        case 404:
          return `${this.capitalizeFirst(context)} not found. Please try again later.`;
        case 403:
          return `Access denied. Unable to load ${context}.`;
        case 429:
          return `Too many requests. Please wait a moment and try again.`;
        default:
          return `Unable to load ${context}. Please try again.`;
      }
    }

    // Server errors (5xx)
    if (error.status >= 500) {
      return `Server is temporarily unavailable. Please try again in a few moments.`;
    }

    // Unknown HTTP error
    return this.getGenericMessage(context);
  }

  /**
   * Handle generic Error objects
   */
  private handleGenericError(error: Error, context: string): string {
    const message = error.message || '';

    // Check for common error patterns and sanitize them
    
    // Remove URLs from error messages
    if (this.containsUrl(message)) {
      return this.getGenericMessage(context);
    }

    // Network-related errors
    if (message.toLowerCase().includes('network') || 
        message.toLowerCase().includes('failed to fetch')) {
      return `Unable to connect. Please check your internet connection and try again.`;
    }

    // Timeout errors
    if (message.toLowerCase().includes('timeout')) {
      return `Request timed out. Please check your connection and try again.`;
    }

    // CORS errors
    if (message.toLowerCase().includes('cors')) {
      return `Unable to load ${context} due to security restrictions.`;
    }

    // In production, don't expose raw error messages
    if (!isDevMode()) {
      return this.getGenericMessage(context);
    }

    // In development, include sanitized message
    return `Failed to load ${context}: ${this.sanitizeMessage(message)}`;
  }

  /**
   * Handle string errors
   */
  private handleStringError(error: string, context: string): string {
    // If already user-friendly (no URLs, no technical jargon), use it
    if (!this.containsUrl(error) && !this.containsTechnicalJargon(error)) {
      return error;
    }

    // Otherwise, sanitize it
    return this.getGenericMessage(context);
  }

  /**
   * Get a generic user-friendly error message
   */
  private getGenericMessage(context: string): string {
    return `Unable to load ${context}. Please try again.`;
  }

  /**
   * Check if string contains a URL
   */
  private containsUrl(str: string): boolean {
    const urlPattern = /https?:\/\/[^\s]+|localhost:\d+|127\.0\.0\.1:\d+/i;
    return urlPattern.test(str);
  }

  /**
   * Check if string contains technical jargon
   */
  private containsTechnicalJargon(str: string): boolean {
    const technicalPatterns = [
      /http failure/i,
      /status code/i,
      /\d{3} (not found|error|forbidden)/i,
      /stack trace/i,
      /at \w+\./i, // Stack trace pattern
      /assets\/data\//i,
      /\.json/i,
      /\.ts/i,
    ];

    return technicalPatterns.some(pattern => pattern.test(str));
  }

  /**
   * Remove sensitive information from error messages
   */
  private sanitizeMessage(message: string): string {
    return message
      // Remove URLs
      .replace(/https?:\/\/[^\s]+/g, '[URL]')
      .replace(/localhost:\d+/g, '[local]')
      .replace(/127\.0\.0\.1:\d+/g, '[local]')
      // Remove file paths
      .replace(/\/assets\/[^\s]+/g, '[path]')
      .replace(/[A-Z]:\\[^\s]+/g, '[path]')
      // Remove stack trace lines
      .replace(/at \w+\.[^\n]+/g, '')
      .trim();
  }

  /**
   * Capitalize first letter of a string
   */
  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Check if error indicates a network connectivity issue
   */
  isNetworkError(error: any): boolean {
    if (error instanceof HttpErrorResponse) {
      return error.status === 0;
    }
    
    if (error instanceof Error) {
      const message = error.message.toLowerCase();
      return message.includes('network') || 
             message.includes('failed to fetch') ||
             message.includes('connection');
    }

    return false;
  }

  /**
   * Check if error indicates a timeout
   */
  isTimeoutError(error: any): boolean {
    if (error instanceof Error) {
      return error.message.toLowerCase().includes('timeout');
    }
    return false;
  }
}
