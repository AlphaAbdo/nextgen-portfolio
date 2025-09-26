import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-separator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="separator-container" [class]="variant">
      <div class="separator-line">
        <div class="separator-center">
          @if (showIcon) {
            <div class="separator-icon">
              <ng-content select="[icon]"></ng-content>
            </div>
          }
          @if (showText && text) {
            <div class="separator-text">{{ text }}</div>
          }
        </div>
      </div>
      @if (showParticles) {
        <div class="separator-particles">
          <div class="particle" *ngFor="let particle of particles"></div>
        </div>
      }
    </div>
  `,
  styles: [`
    .separator-container {
      width: 100%;
      max-width: 1200px;
      margin: 2rem auto;
      position: relative;
      z-index: 5;
    }

    /* ========== SEPARATOR LINE ========== */

    .separator-line {
      position: relative;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--color-secondary) 15%,
        var(--color-secondary) 50%,
        var(--color-secondary) 85%,
        transparent 100%
      );
      margin: 1.5rem 0;
      opacity: 0.8;
    }

    .separator-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      gap: 1rem;
      background: var(--color-secondary);
      padding: 0 1.5rem;
      border-radius: 20px;
      border: 1px solid var(--color-secondary);
      box-shadow: 0 4px 15px hsla(355, 47%, 43%, 0.3);
    }

    /* Light theme center background */
    [data-theme="light"] .separator-center {
      background: var(--color-secondary);
      border: 1px solid var(--color-secondary);
    }

    /* ========== ICON STYLES ========== */

    .separator-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: transparent;
      color: #000000;
      filter: grayscale(100%) brightness(0);
      font-size: 16px;
      transition: all 0.3s ease;
      position: relative;
    }

    .separator-icon::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      background: linear-gradient(
        135deg,
        hsla(355, 47%, 43%, 0.2) 0%,
        hsla(355, 47%, 43%, 0.3) 100%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }

    .separator-icon:hover::before {
      opacity: 1;
    }

    .separator-icon:hover {
      transform: scale(1.1);
    }

    /* ========== TEXT STYLES ========== */

    .separator-text {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--color-text-secondary);
      letter-spacing: 0.5px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    /* ========== PARTICLE EFFECTS ========== */

    .separator-particles {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      overflow: hidden;
      /* Performance optimizations */
      transform: translateZ(0);
      will-change: transform;
    }

    .particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: var(--color-secondary);
      border-radius: 50%;
      opacity: 0.6;
      /* Reduced animation frequency for better performance */
      animation: float 12s ease-in-out infinite;
      /* Hardware acceleration */
      transform: translateZ(0);
      will-change: transform;
    }

    .particle:nth-child(1) { left: 15%; animation-delay: 0s; }
    .particle:nth-child(2) { left: 35%; animation-delay: 2s; }
    .particle:nth-child(3) { left: 50%; animation-delay: 4s; }
    .particle:nth-child(4) { left: 65%; animation-delay: 1s; }
    .particle:nth-child(5) { left: 85%; animation-delay: 3s; }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
      50% { transform: translateY(-10px) rotate(180deg); opacity: 0.8; }
    }

    /* ========== VARIANTS ========== */

    .separator-container.elegant {
      margin: 3rem auto;
    }

    .separator-container.elegant .separator-line {
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--color-secondary) 15%,
        var(--color-secondary) 50%,
        var(--color-secondary) 85%,
        transparent 100%
      );
    }

    .separator-container.minimal {
      margin: 1.5rem auto;
      background: none;
      backdrop-filter: none;
      border: none;
      box-shadow: none;
    }

    .separator-container.minimal .separator-line {
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--color-secondary) 50%,
        transparent 100%
      );
    }

    .separator-container.minimal .separator-center {
      background: transparent;
      border: none;
      box-shadow: none;
      padding: 0 1rem;
    }

    /* ========== RESPONSIVE DESIGN ========== */

    @media (max-width: 768px) {
      .separator-container {
        margin: 1.5rem auto;
      }

      .separator-center {
        padding: 0 1rem;
        gap: 0.5rem;
      }

      .separator-icon {
        width: 28px;
        height: 28px;
        font-size: 14px;
      }

      .separator-text {
        font-size: 0.8rem;
      }

      .separator-container.elegant {
        margin: 2rem auto;
      }
    }

    @media (max-width: 480px) {
      .separator-line {
        margin: 1rem 0;
      }

      .separator-center {
        padding: 0 0.8rem;
      }

      .separator-text {
        font-size: 0.75rem;
        letter-spacing: 0.3px;
      }
    }
  `]
})
export class SeparatorComponent {
  @Input() variant: 'default' | 'elegant' | 'minimal' = 'default';
  @Input() text?: string;
  @Input() showIcon = false;
  @Input() showText = false;
  @Input() showParticles = false;

  // Generate particle positions for animation - reduced from 9 to 5 for better performance
  particles = Array.from({ length: 5 }, (_, i) => i);
}