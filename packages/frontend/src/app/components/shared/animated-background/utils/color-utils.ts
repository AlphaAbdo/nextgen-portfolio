/**
 * Color utility functions for animated background
 */

/**
 * Extract hue value (0-360) from hex color
 * @param hexColor Hex color string (#RRGGBB or #RRGGBBAA)
 * @returns Hue value in degrees (0-360)
 */
export function extractHueFromColor(hexColor: string): number {
  try {
    // Remove # if present
    const hex = hexColor.replace('#', '');

    // Validate hex format
    if (!/^[0-9A-Fa-f]{6,8}$/.test(hex)) {
      return 200; // Default blue hue
    }

    // Convert hex to RGB
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;

    // Find max and min values
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;

    let hue = 0;

    if (diff === 0) {
      hue = 0; // Grayscale
    } else {
      switch (max) {
        case r: hue = ((g - b) / diff) % 6; break;
        case g: hue = (b - r) / diff + 2; break;
        case b: hue = (r - g) / diff + 4; break;
      }
      hue *= 60;
      if (hue < 0) hue += 360;
    }

    return Math.round(hue);
  } catch (error) {
    console.warn('Error extracting hue from color:', hexColor, error);
    return 200; // Default blue hue
  }
}

/**
 * Blend two hex colors with alpha support
 * @param color1 First hex color (#RRGGBB or #RRGGBBAA)
 * @param color2 Second hex color (#RRGGBB or #RRGGBBAA)
 * @param ratio Blend ratio (0 = color1, 1 = color2)
 * @returns Blended hex color with alpha
 */
export function blendColors(color1: string, color2: string, ratio: number): string {
  try {
    // Extract RGB values from hex colors
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);
    const a1 = parseInt(color1.slice(7, 9), 16) || 255;

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);
    const a2 = parseInt(color2.slice(7, 9), 16) || 255;

    // Blend the colors
    const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
    const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
    const b = Math.round(b1 * (1 - ratio) + b2 * ratio);
    const a = Math.round(a1 * (1 - ratio) + a2 * ratio);

    // Return as hex with alpha
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}${a.toString(16).padStart(2, '0')}`;
  } catch (error) {
    console.warn('Error blending colors:', color1, color2, error);
    return color1; // Return first color as fallback
  }
}

/**
 * Check if a color is pure grayscale (R = G = B)
 * @param color Hex color string (#RRGGBB or #RRGGBBAA)
 * @returns True if grayscale, false otherwise
 */
export function isGrayscaleColor(color: string): boolean {
  try {
    // Remove # if present
    const hex = color.replace('#', '');

    // Validate hex format
    if (!/^[0-9A-Fa-f]{6,8}$/.test(hex)) {
      return false; // Invalid hex format
    }

    // Convert hex to RGB
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Check if all components are equal (grayscale)
    return r === g && g === b;
  } catch (error) {
    console.warn('Error parsing color for grayscale detection:', color, error);
    return false;
  }
}
