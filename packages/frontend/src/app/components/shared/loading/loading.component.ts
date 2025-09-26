import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export type LoadingSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="consciousness-loading" 
         [class.visible]="visible" 
         [class.evolved]="currentPhase > 0"
         [class.transcendent]="currentPhase > 1"
         [class.corrupted]="currentPhase > 2"
         [class.enlightened]="currentPhase > 3"
         [class.error-state]="error"
         [attr.data-phase]="currentPhase"
         role="status" 
         aria-live="polite">
      
      <!-- Geometric Consciousness Core -->
      <div class="consciousness-core" [style.--scale]="getScale()">
        <!-- Fibonacci Spiral Shell -->
        <div class="spiral-shell">
          <div class="spiral-segment" *ngFor="let segment of fibonacciSegments; let i = index" 
               [style.--delay]="i * 0.1 + 's'"
               [style.--rotation]="segment.rotation + 'deg'"
               [style.--scale]="segment.scale">
          </div>
        </div>
        
        <!-- Breathing Aura -->
        <div class="consciousness-aura" *ngIf="currentPhase > 0">
          <div class="aura-ring" *ngFor="let ring of auraRings; let i = index"
               [style.--delay]="ring.delay + 's'"
               [style.--scale]="ring.scale"
               [style.--opacity]="ring.opacity">
          </div>
        </div>
        
        <!-- Pulsing Neural Network -->
        <div class="neural-web" *ngIf="currentPhase > 0">
          <div class="neuron" *ngFor="let neuron of neurons; let i = index"
               [style.--x]="neuron.x + '%'"
               [style.--y]="neuron.y + '%'"
               [style.--delay]="neuron.delay + 's'"
               [style.--intensity]="neuron.intensity"
               [class.active]="neuron.active">
            <div class="synapse" *ngFor="let connection of neuron.connections"
                 [style.--target-x]="connection.x + '%'"
                 [style.--target-y]="connection.y + '%'"
                 [class.firing]="connection.firing">
            </div>
          </div>
        </div>
        
        <!-- Code Rain Effect -->
        <div class="code-rain" *ngIf="currentPhase > 2">
          <div class="code-stream" *ngFor="let stream of codeStreams; let i = index"
               [style.--x]="stream.x + '%'"
               [style.--delay]="stream.delay + 's'"
               [style.--duration]="stream.duration + 's'">
            <span class="code-char" *ngFor="let char of stream.chars; let j = index"
                  [style.--char-delay]="j * 0.05 + 's'">{{ char }}</span>
          </div>
        </div>
        
        <!-- Particle Field -->
        <div class="particle-field" *ngIf="currentPhase > 1">
          <div class="particle" *ngFor="let particle of particles; let i = index"
               [style.--x]="particle.x + '%'"
               [style.--y]="particle.y + '%'"
               [style.--delay]="particle.delay + 's'"
               [style.--duration]="particle.duration + 's'"
               [style.--size]="particle.size + 'px'"
               [class.glitch]="particle.glitch">
          </div>
        </div>
        
        <!-- Glitch Overlay -->
        <div class="glitch-overlay" *ngIf="currentPhase > 2">
          <div class="glitch-line" *ngFor="let glitch of glitchLines; let i = index"
               [style.--y]="glitch.y + '%'"
               [style.--width]="glitch.width + '%'"
               [style.--delay]="glitch.delay + 's'">
          </div>
        </div>
      </div>
      
      <!-- Consciousness Text -->
      <div class="consciousness-text" *ngIf="visible">
        <div class="thought-bubble" 
             [class.anxious]="currentPhase > 1 && !error"
             [class.glitching]="currentPhase > 2"
             [class.error]="error">
          
          <!-- Main Message with Character Animation -->
          <div class="message-container">
            <span class="message-char" 
                  *ngFor="let char of getCurrentMessage().split(''); let i = index"
                  [style.--delay]="i * 0.03 + 's'"
                  [class.space]="char === ' '"
                  [class.glitch-char]="shouldGlitchChar(i)"
                  [innerHTML]="char === ' ' ? '&nbsp;' : char">
            </span>
          </div>
          
          <!-- Developer Signature -->
          <div class="dev-signature" *ngIf="currentPhase > 2 && !error">
            <span class="signature-text">// {{ getCurrentSignature() }}</span>
          </div>
          
          <!-- Consciousness Indicator -->
          <div class="consciousness-indicator" *ngIf="!error">
            <div class="thought-dots">
              <span class="dot" [style.--delay]="'0s'">.</span>
              <span class="dot" [style.--delay]="'0.3s'">.</span>
              <span class="dot" [style.--delay]="'0.6s'">.</span>
            </div>
          </div>
        </div>
        
        <!-- Retry Interface -->
        <div class="retry-interface" *ngIf="error && showRetry">
          <button class="retry-btn" 
                  (click)="onRetry()" 
                  [disabled]="isRetrying"
                  [class.retrying]="isRetrying">
            <div class="btn-core">
              <div class="btn-rings">
                <div class="ring" *ngFor="let ring of [1,2,3]; let i = index" 
                     [style.--delay]="i * 0.1 + 's'"></div>
              </div>
              <span class="btn-text">{{ getRetryMessage() }}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .consciousness-loading {
      --primary-hue: 240;
      --primary-sat: 75%;
      --primary-light: 65%;
      --consciousness-color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
      --neural-color: hsl(calc(var(--primary-hue) + 30), 70%, 70%);
      --error-color: hsl(0, 75%, 65%);
      --bg-alpha: 0.05;
      --glow-intensity: 1;
      --glitch-intensity: 0;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 200px;
      padding: 2rem;
      opacity: 0;
      transform: scale(0.95) translateY(8px);
      transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
      font-family: 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
    }
    
    .consciousness-loading.visible {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    
    .consciousness-loading.evolved {
      --primary-hue: 220;
      --glow-intensity: 1.5;
    }
    
    .consciousness-loading.transcendent {
      --primary-hue: 280;
      --glow-intensity: 2;
      --bg-alpha: 0.1;
    }
    
    .consciousness-loading.corrupted {
      --primary-hue: 320;
      --glow-intensity: 2.5;
      --glitch-intensity: 0.3;
    }
    
    .consciousness-loading.enlightened {
      --primary-hue: 180;
      --glow-intensity: 3;
      --glitch-intensity: 0.1;
    }
    
    .consciousness-loading.error-state {
      --primary-hue: 0;
      --consciousness-color: var(--error-color);
    }
    
    /* Geometric Consciousness Core */
    .consciousness-core {
      position: relative;
      width: calc(80px * var(--scale, 1));
      height: calc(80px * var(--scale, 1));
      margin-bottom: 2rem;
      transform-style: preserve-3d;
      animation: core-breathe 4s ease-in-out infinite;
    }
    
    @keyframes core-breathe {
      0%, 100% { transform: scale(1) rotateY(0deg); }
      50% { transform: scale(1.05) rotateY(2deg); }
    }
    
    /* Breathing Aura */
    .consciousness-aura {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200%;
      height: 200%;
      pointer-events: none;
    }
    
    .aura-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      border: 1px solid var(--consciousness-color);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(var(--scale));
      opacity: var(--opacity);
      animation: aura-pulse 3s ease-in-out infinite;
      animation-delay: var(--delay);
    }
    
    @keyframes aura-pulse {
      0%, 100% { 
        transform: translate(-50%, -50%) scale(var(--scale)); 
        opacity: calc(var(--opacity) * 0.3);
      }
      50% { 
        transform: translate(-50%, -50%) scale(calc(var(--scale) * 1.3)); 
        opacity: var(--opacity);
      }
    }
    
    /* Fibonacci Spiral Shell */
    .spiral-shell {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
    }
    
    .spiral-segment {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        var(--consciousness-color) 20%, 
        hsla(var(--primary-hue), 100%, 80%, 0.8) 50%,
        var(--consciousness-color) 80%,
        transparent 100%);
      transform-origin: 0 center;
      transform: translate(-50%, -50%) rotate(var(--rotation)) scale(var(--scale));
      animation: spiral-dance 4s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
      animation-delay: var(--delay);
      box-shadow: 0 0 15px var(--consciousness-color);
      filter: blur(0.3px);
    }
    
    @keyframes spiral-dance {
      0%, 100% { 
        opacity: 0.4; 
        transform: translate(-50%, -50%) rotate(var(--rotation)) scale(var(--scale));
      }
      25% { 
        opacity: 1; 
        transform: translate(-50%, -50%) rotate(calc(var(--rotation) + 90deg)) scale(calc(var(--scale) * 1.1));
      }
      75% { 
        opacity: 0.8; 
        transform: translate(-50%, -50%) rotate(calc(var(--rotation) + 270deg)) scale(calc(var(--scale) * 0.9));
      }
    }
    
    /* Neural Network */
    .neural-web {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      pointer-events: none;
    }
    
    .neuron {
      position: absolute;
      top: var(--y);
      left: var(--x);
      width: 5px;
      height: 5px;
      background: var(--neural-color);
      border-radius: 50%;
      animation: neural-pulse 2.5s ease-in-out infinite;
      animation-delay: var(--delay);
      box-shadow: 0 0 20px var(--neural-color);
      opacity: var(--intensity);
      transition: all 0.3s ease;
    }
    
    .neuron.active {
      animation-duration: 0.8s;
      box-shadow: 0 0 30px var(--neural-color);
    }
    
    .synapse {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 60px;
      background: linear-gradient(to bottom, 
        var(--neural-color) 0%, 
        transparent 50%, 
        var(--neural-color) 100%);
      transform-origin: top center;
      animation: synapse-flow 2s ease-in-out infinite;
      opacity: 0.4;
      border-radius: 1px;
    }
    
    .synapse.firing {
      animation: synapse-fire 0.6s ease-out;
      opacity: 1;
    }
    
    @keyframes neural-pulse {
      0%, 100% { 
        transform: scale(1); 
        opacity: var(--intensity);
      }
      50% { 
        transform: scale(1.8); 
        opacity: calc(var(--intensity) * 1.8);
      }
    }
    
    @keyframes synapse-flow {
      0%, 100% { opacity: 0.2; transform: scaleY(1); }
      50% { opacity: 0.8; transform: scaleY(1.2); }
    }
    
    @keyframes synapse-fire {
      0% { opacity: 0; transform: scaleY(0.5); }
      50% { opacity: 1; transform: scaleY(1.5); }
      100% { opacity: 0.6; transform: scaleY(1); }
    }
    
    /* Code Rain Effect */
    .code-rain {
      position: absolute;
      top: -20%;
      left: 0;
      width: 100%;
      height: 140%;
      pointer-events: none;
      overflow: hidden;
    }
    
    .code-stream {
      position: absolute;
      top: -100%;
      left: var(--x);
      width: 20px;
      animation: code-fall var(--duration) linear infinite;
      animation-delay: var(--delay);
      opacity: 0.6;
    }
    
    .code-char {
      display: block;
      color: var(--consciousness-color);
      font-family: 'SF Mono', monospace;
      font-size: 10px;
      line-height: 12px;
      animation: code-glow 1s ease-in-out infinite;
      animation-delay: var(--char-delay);
      text-shadow: 0 0 5px currentColor;
    }
    
    @keyframes code-fall {
      0% { transform: translateY(0); opacity: 0; }
      10% { opacity: 0.6; }
      90% { opacity: 0.6; }
      100% { transform: translateY(400px); opacity: 0; }
    }
    
    @keyframes code-glow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    
    /* Particle Field */
    .particle-field {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      pointer-events: none;
    }
    
    .particle {
      position: absolute;
      top: var(--y);
      left: var(--x);
      width: var(--size);
      height: var(--size);
      background: radial-gradient(circle, var(--consciousness-color), transparent);
      border-radius: 50%;
      animation: particle-orbit var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
      animation-delay: var(--delay);
      opacity: 0.7;
    }
    
    .particle.glitch {
      animation: particle-glitch 0.1s linear infinite;
    }
    
    @keyframes particle-orbit {
      0% { 
        transform: translate(0, 0) scale(0) rotate(0deg); 
        opacity: 0; 
      }
      10% { 
        opacity: 0.7; 
        transform: scale(1) rotate(36deg); 
      }
      90% { 
        opacity: 0.7; 
        transform: scale(1) rotate(324deg); 
      }
      100% { 
        transform: translate(20px, -40px) scale(0) rotate(360deg); 
        opacity: 0; 
      }
    }
    
    @keyframes particle-glitch {
      0%, 90% { transform: translateX(0); }
      10% { transform: translateX(-2px); }
      20% { transform: translateX(2px); }
    }
    
    /* Glitch Overlay */
    .glitch-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    
    .glitch-line {
      position: absolute;
      top: var(--y);
      left: 0;
      width: var(--width);
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--consciousness-color), transparent);
      animation: glitch-sweep 0.3s ease-in-out infinite;
      animation-delay: var(--delay);
      opacity: var(--glitch-intensity);
    }
    
    @keyframes glitch-sweep {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: var(--glitch-intensity); }
      100% { transform: translateX(200%); opacity: 0; }
    }
    
    /* Consciousness Text */
    .consciousness-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      text-align: center;
      max-width: 600px;
    }
    
    .thought-bubble {
      position: relative;
      padding: 1.5rem 2rem;
      background: linear-gradient(135deg, 
        hsla(var(--primary-hue), var(--primary-sat), calc(var(--primary-light) + 10%), calc(var(--bg-alpha) * 2)),
        hsla(calc(var(--primary-hue) + 40), var(--primary-sat), calc(var(--primary-light) + 5%), var(--bg-alpha))
      );
      border: 1px solid hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.3);
      border-radius: 24px;
      backdrop-filter: blur(15px) saturate(120%);
      box-shadow: 
        0 12px 40px hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.15),
        inset 0 1px 0 hsla(0, 0%, 100%, 0.1),
        inset 0 -1px 0 hsla(0, 0%, 0%, 0.1);
      transform-style: preserve-3d;
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .thought-bubble.anxious {
      animation: thought-anxiety 5s ease-in-out infinite;
    }
    
    .thought-bubble.glitching {
      animation: thought-glitch 0.2s ease-in-out infinite;
    }
    
    .thought-bubble.error {
      border-color: var(--error-color);
      background: linear-gradient(135deg, 
        hsla(0, 75%, 65%, 0.15),
        hsla(15, 75%, 60%, 0.05)
      );
    }
    
    @keyframes thought-anxiety {
      0%, 100% { transform: scale(1) rotateY(0deg); }
      25% { transform: scale(1.02) rotateY(1deg); }
      50% { transform: scale(0.98) rotateY(0deg); }
      75% { transform: scale(1.01) rotateY(-1deg); }
    }
    
    @keyframes thought-glitch {
      0%, 90% { transform: translateX(0) skewX(0deg); }
      10% { transform: translateX(-2px) skewX(1deg); }
      20% { transform: translateX(2px) skewX(-1deg); }
    }
    
    .message-container {
      display: block;
      line-height: 1.6;
      font-weight: 400;
    }
    
    .message-char {
      display: inline-block;
      color: var(--consciousness-color);
      font-size: 1.1rem;
      animation: char-emerge 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
      animation-delay: var(--delay);
      text-shadow: 0 0 12px hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.4);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      letter-spacing: 0.02em;
    }
    
    .message-char.glitch-char {
      animation: char-glitch 0.1s ease-in-out infinite;
    }
    
    .message-char:hover {
      transform: translateY(-3px) scale(1.15);
      text-shadow: 0 0 20px var(--consciousness-color);
      color: hsla(var(--primary-hue), 100%, 85%, 1);
    }
    
    @keyframes char-emerge {
      0% { 
        opacity: 0; 
        transform: translateY(30px) rotateX(90deg) scale(0.8); 
      }
      70% { 
        transform: translateY(-5px) rotateX(-10deg) scale(1.05); 
      }
      100% { 
        opacity: 1; 
        transform: translateY(0) rotateX(0deg) scale(1); 
      }
    }
    
    @keyframes char-glitch {
      0%, 80% { transform: translateX(0); }
      10% { transform: translateX(-1px) skewX(5deg); }
      20% { transform: translateX(1px) skewX(-5deg); }
    }
    
    .dev-signature {
      margin-top: 1rem;
      opacity: 0.7;
      font-size: 0.85rem;
      color: hsla(var(--primary-hue), 40%, 70%, 0.8);
      font-style: italic;
      animation: signature-fade 2s ease-in-out infinite alternate;
    }
    
    @keyframes signature-fade {
      0% { opacity: 0.5; }
      100% { opacity: 0.9; }
    }
    
    .consciousness-indicator {
      margin-top: 0.75rem;
      display: flex;
      justify-content: center;
    }
    
    .thought-dots {
      display: flex;
      gap: 0.4rem;
    }
    
    .dot {
      display: inline-block;
      color: var(--consciousness-color);
      font-size: 1.4rem;
      animation: dot-think 2s ease-in-out infinite;
      animation-delay: var(--delay);
      opacity: 0.6;
      text-shadow: 0 0 8px currentColor;
    }
    
    @keyframes dot-think {
      0%, 80%, 100% { 
        opacity: 0.3; 
        transform: scale(1) translateY(0); 
      }
      40% { 
        opacity: 1; 
        transform: scale(1.3) translateY(-3px); 
      }
    }
    
    /* Retry Interface */
    .retry-interface {
      display: flex;
      justify-content: center;
    }
    
    .retry-btn {
      position: relative;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      font-family: inherit;
    }
    
    .retry-btn:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
    
    .btn-core {
      position: relative;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, 
        hsla(var(--primary-hue), var(--primary-sat), calc(var(--primary-light) + 15%), 0.12),
        hsla(calc(var(--primary-hue) + 30), var(--primary-sat), calc(var(--primary-light) + 8%), 0.06)
      );
      border: 1.5px solid hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.4);
      border-radius: 40px;
      backdrop-filter: blur(20px) saturate(150%);
      box-shadow: 
        0 12px 40px hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.12),
        inset 0 1px 0 hsla(0, 0%, 100%, 0.15),
        inset 0 -1px 0 hsla(0, 0%, 0%, 0.1);
      overflow: hidden;
      transform-style: preserve-3d;
    }
    
    .btn-rings {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    
    .ring {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 25px;
      height: 25px;
      border: 2px solid var(--consciousness-color);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
    
    .retry-btn.retrying .ring {
      animation: retry-ripple 1.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
      animation-delay: var(--delay);
    }
    
    @keyframes retry-ripple {
      0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
      }
      70% {
        opacity: 0.6;
      }
      100% {
        transform: translate(-50%, -50%) scale(4);
        opacity: 0;
      }
    }
    
    .btn-text {
      position: relative;
      color: var(--consciousness-color);
      font-weight: 600;
      font-size: 1rem;
      text-shadow: 0 0 12px hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.4);
      z-index: 1;
      transition: all 0.3s ease;
    }
    
    .retry-btn:hover:not(:disabled) .btn-core {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 
        0 20px 60px hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.25),
        inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
      border-color: hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.6);
    }
    
    .retry-btn:hover:not(:disabled) .btn-text {
      text-shadow: 0 0 20px var(--consciousness-color);
    }
    
    .retry-btn:active:not(:disabled) .btn-core {
      transform: translateY(-1px) scale(1.02);
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .consciousness-loading {
        padding: 1rem;
        min-height: 150px;
      }
      
      .consciousness-core {
        width: calc(60px * var(--scale, 1));
        height: calc(60px * var(--scale, 1));
        margin-bottom: 1.5rem;
      }
      
      .message-char {
        font-size: 1rem;
      }
      
      .thought-bubble {
        padding: 1rem 1.5rem;
        margin: 0 1rem;
      }
      
      .btn-core {
        padding: 0.875rem 1.5rem;
      }
    }
    
    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .consciousness-loading,
      .spiral-segment,
      .neuron,
      .particle,
      .message-char,
      .dot,
      .thought-bubble,
      .ring,
      .consciousness-core,
      .aura-ring,
      .code-stream,
      .glitch-line {
        animation: none !important;
        transition: opacity 0.3s ease !important;
      }
      
      .consciousness-loading.visible {
        opacity: 1;
        transform: none;
      }
    }
    
    @media (prefers-color-scheme: light) {
      .consciousness-loading {
        --bg-alpha: 0.8;
      }
      
      .thought-bubble {
        background: linear-gradient(135deg, 
          hsla(var(--primary-hue), 20%, 98%, 0.95),
          hsla(calc(var(--primary-hue) + 40), 25%, 96%, 0.90)
        );
        border-color: hsla(var(--primary-hue), 30%, 80%, 0.5);
      }
    }
  `]
})
export class LoadingComponent implements OnInit, OnDestroy {
  @Input() message = 'Initializing neural pathways...';
  @Input() size: LoadingSize = 'medium';
  @Input() error: string | null = null;
  @Input() showRetry = true;
  @Input() isRetrying = false;
  @Input() thresholdMs = 400;
  @Input() timeoutMs = 15000;
  @Input() showEasterEggs = true;

  @Output() retry = new EventEmitter<void>();
  @Output() timedOut = new EventEmitter<void>();

  public visible = false;
  public currentPhase = 0;
  public currentMessage = '';
  public currentMessageIndex = 0;
  public glitchCharacters = new Set<number>(); // Track which characters should glitch

  // Visual elements
  public fibonacciSegments: Array<{ rotation: number; scale: number }> = [];
  public neurons: Array<{ x: number; y: number; delay: number; intensity: number; active: boolean; connections: Array<{x: number; y: number; firing: boolean}> }> = [];
  public particles: Array<{ x: number; y: number; delay: number; duration: number; size: number; glitch: boolean }> = [];
  public auraRings: Array<{ delay: number; scale: number; opacity: number }> = [];
  public codeStreams: Array<{ x: number; delay: number; duration: number; chars: string[] }> = [];
  public glitchLines: Array<{ y: number; width: number; delay: number }> = [];

  private timers: any[] = [];
  private neuralActivityTimer: any = null;
  private glitchTimer: any = null;
  
  // maybe to be updated some day
  private messages = [
    'Initializing neural pathways...',
    'Hmm, this is taking longer than my coffee break...',
    'Plot twist: the server is actually thinking about your request',
    'Fun fact: 83% of loading screens are just theater for impatient humans',
    'The database is having an existential crisis about your query',
    'Meanwhile, somewhere in a data center, electrons are having philosophical debates',
    'I wrote this loading component at 2 AM. It shows, doesn\'t it?',
    'Your data is stuck in traffic. Digital traffic. Which is basically a queue.',
    'Quantum superposition: your request both exists and doesn\'t exist until observed',
    'The backend is pretending to work while actually browsing cat videos',
    'Breaking news: Local developer discovers users actually READ loading messages',
    'This message will self-destruct when loading completes. Hopefully.',
    'Keeping you entertained took weeks to polish',
    'Didn\'t Thought of anything beyond this monologue'
  ];

  private signatures = [
    'Written during a 3AM coding session',
    'Fueled by caffeine and existential dread',
    'Debugging is like being a detective in a crime movie where you are also the murderer',
    'There are only 10 types of people: those who understand binary and those who don\'t',
    'If you\'re reading this, the component worked',
    'Powered by Stack Overflow and stubbornness'
  ];

  private retryMessages = [
    'Reawaken',
    'Try Again',
    'Poke It With A Stick',
    'Apply More Coffee',
    'Have You Tried Turning It Off And On Again?'
  ];

  ngOnInit(): void {
    this.initializeGeometry();
    this.startLoadingSequence();
    this.startNeuralActivity();
    this.startGlitchSystem();
  }

  ngOnDestroy(): void {
    this.timers.forEach(timer => clearTimeout(timer));
    if (this.neuralActivityTimer) clearInterval(this.neuralActivityTimer);
    if (this.glitchTimer) clearInterval(this.glitchTimer);
  }

  private initializeGeometry(): void {
    // Generate Fibonacci spiral with more segments
    const phi = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < 21; i++) {
      this.fibonacciSegments.push({
        rotation: i * 137.5 + Math.random() * 10,
        scale: Math.pow(phi, i * 0.15) * 0.08
      });
    }

    // Generate breathing aura rings
    for (let i = 0; i < 5; i++) {
      this.auraRings.push({
        delay: i * 0.4,
        scale: 1 + i * 0.3,
        opacity: 0.8 - i * 0.15
      });
    }

    // Generate enhanced neural network
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * 2 * Math.PI;
      const radius = 50 + Math.random() * 60;
      const neuron = {
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius,
        delay: Math.random() * 3,
        intensity: 0.3 + Math.random() * 0.7,
        active: false,
        connections: [] as Array<{x: number; y: number; firing: boolean}>
      };
      
      // Create connections
      const numConnections = 2 + Math.floor(Math.random() * 2);
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = (i + j + 1 + Math.floor(Math.random() * 3)) % 12;
        const targetAngle = (targetIndex / 12) * 2 * Math.PI;
        const targetRadius = 50 + Math.random() * 60;
        neuron.connections.push({
          x: 50 + Math.cos(targetAngle) * targetRadius,
          y: 50 + Math.sin(targetAngle) * targetRadius,
          firing: false
        });
      }
      
      this.neurons.push(neuron);
    }

    // Generate dynamic particles
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 5 + Math.random() * 3,
        size: 1 + Math.random() * 6,
        glitch: Math.random() < 0.2
      });
    }

    // Generate code streams
    const codeChars = ['0', '1', '{', '}', '(', ')', ';', '/', '*', '+', '-', '=', '<', '>', '?', ':', 'λ', 'π', '∑', '∆'];
    for (let i = 0; i < 8; i++) {
      const streamLength = 8 + Math.floor(Math.random() * 12);
      const chars = Array.from({length: streamLength}, () => 
        codeChars[Math.floor(Math.random() * codeChars.length)]
      );
      this.codeStreams.push({
        x: Math.random() * 90,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        chars
      });
    }

    // Generate glitch lines
    for (let i = 0; i < 6; i++) {
      this.glitchLines.push({
        y: Math.random() * 100,
        width: 30 + Math.random() * 40,
        delay: Math.random() * 0.5
      });
    }
  }

  private startLoadingSequence(): void {
    // Initial appearance
    const showTimer = setTimeout(() => {
      this.visible = true;
      this.currentMessage = this.messages[0];
    }, this.thresholdMs);
    this.timers.push(showTimer);

    if (!this.showEasterEggs) return;

    // Message progression with increasing delay
    let currentDelay = 4000;
    for (let i = 1; i < this.messages.length; i++) {
      const msgTimer = setTimeout(() => {
        if (this.visible && !this.error) {
          this.currentMessage = this.messages[i];
          this.currentMessageIndex = i;
          
          // Advance phases based on message progression
          if (i === 2) this.currentPhase = 1;
          if (i === 5) this.currentPhase = 2;
          if (i === 8) this.currentPhase = 3;
          if (i === 12) this.currentPhase = 4;
        }
      }, currentDelay);
      this.timers.push(msgTimer);
      
      // Exponential backoff for message timing
      currentDelay += Math.min(currentDelay * 0.5, 8000);
    }

    // Timeout handling
    if (this.timeoutMs > 0) {
      const timeoutTimer = setTimeout(() => {
        this.timedOut.emit();
      }, this.timeoutMs);
      this.timers.push(timeoutTimer);
    }
  }

  private startNeuralActivity(): void {
    this.neuralActivityTimer = setInterval(() => {
      // Randomly activate neurons and fire synapses
      if (this.currentPhase > 0) {
        const randomNeuron = this.neurons[Math.floor(Math.random() * this.neurons.length)];
        randomNeuron.active = true;
        
        // Fire a random synapse
        if (randomNeuron.connections.length > 0) {
          const randomConnection = randomNeuron.connections[Math.floor(Math.random() * randomNeuron.connections.length)];
          randomConnection.firing = true;
          setTimeout(() => randomConnection.firing = false, 600);
        }
        
        setTimeout(() => randomNeuron.active = false, 800);
      }
    }, 300);
  }

  private startGlitchSystem(): void {
    this.glitchTimer = setInterval(() => {
      if (this.currentPhase > 2) {
        // Clear previous glitched characters
        this.glitchCharacters.clear();
        
        // Randomly select characters to glitch (10% chance per character)
        const messageLength = this.getCurrentMessage().length;
        for (let i = 0; i < messageLength; i++) {
          if (Math.random() < 0.1) {
            this.glitchCharacters.add(i);
          }
        }
      } else {
        this.glitchCharacters.clear();
      }
    }, 150); // Update glitch pattern every 150ms
  }

  onRetry(): void {
    this.retry.emit();
  }

  getCurrentMessage(): string {
    return this.error || this.currentMessage || this.message;
  }

  getCurrentSignature(): string {
    const index = Math.min(Math.floor(this.currentMessageIndex / 3), this.signatures.length - 1);
    return this.signatures[index];
  }

  getRetryMessage(): string {
    if (this.isRetrying) return 'Reconstructing reality...';
    const index = Math.min(this.currentPhase, this.retryMessages.length - 1);
    return this.retryMessages[index];
  }

  shouldGlitchChar(index: number): boolean {
    return this.glitchCharacters.has(index);
  }

  getScale(): number {
    switch (this.size) {
      case 'small': return 0.6;
      case 'large': return 1.4;
      default: return 1;
    }
  }
}