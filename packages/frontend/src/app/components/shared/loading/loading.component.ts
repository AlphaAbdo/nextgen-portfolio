import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewEncapsulation, inject, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService, LoadingConfig } from './loading.service';

export type LoadingSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // Fixed: was None, now properly isolated
})
export class LoadingComponent implements OnInit, OnDestroy {
  private readonly loadingService = inject(LoadingService);

  // Component inputs
  @Input() message = 'Loading...';
  @Input() size: LoadingSize = 'medium';
  @Input() error: string | null = null;
  @Input() showRetry = true;
  @Input() isRetrying = false;
  @Input() thresholdMs = 0; // Show immediately by default (was causing loading delay)
  @Input() timeoutMs = 15000;
  @Input() showEasterEggs = true;

  // Component outputs
  @Output() retry = new EventEmitter<void>();
  @Output() timedOut = new EventEmitter<void>();

  // Component state
  public visible = false;
  public currentMessage = '';
  public topMessage = '';
  public retryMessage = '';
  
  private config: LoadingConfig | null = null;
  private timers: any[] = [];

  ngOnInit(): void {
    if (isDevMode()) {
      console.log('[LoadingComponent] Initializing with message:', this.message);
    }

    // Load config synchronously (no HTTP needed anymore!)
    this.config = this.loadingService.getConfig();
    
    // Initialize with config
    this.initializeFromConfig();
    
    // Start loading sequence immediately
    this.startLoadingSequence();
  }

  ngOnDestroy(): void {
    if (isDevMode()) {
      console.log('[LoadingComponent] Destroying, clearing', this.timers.length, 'timers');
    }
    
    this.timers.forEach(timer => clearTimeout(timer));
    this.timers = [];
  }

  private initializeFromConfig(): void {
    if (!this.config) {
      // Fallback if config is somehow missing
      this.currentMessage = this.message || 'Loading...';
      this.topMessage = this.showEasterEggs ? '👾 Loading...' : '';
      this.retryMessage = 'Try Again';
      this.visible = true;
      return;
    }

    // Use config values if inputs weren't explicitly set
    if (this.thresholdMs === 0 && this.config.settings.defaultThresholdMs !== 0) {
      this.thresholdMs = this.config.settings.defaultThresholdMs;
    }
    
    if (this.timeoutMs === 15000 && this.config.settings.defaultTimeoutMs !== 15000) {
      this.timeoutMs = this.config.settings.defaultTimeoutMs;
    }

    // Initialize messages
    this.currentMessage = this.message || this.config.messages.initializing;
    
    if (this.showEasterEggs && this.config.settings.enableEasterEggs) {
      this.topMessage = this.loadingService.getRandomEasterEgg(this.config);
    }

    this.retryMessage = this.loadingService.getRandomRetryMessage(this.config);

    // Set visible immediately (no threshold delay) - fixes loading component not appearing
    this.visible = true;

    if (isDevMode()) {
      console.log('[LoadingComponent] Initialized from config:', {
        threshold: this.thresholdMs,
        timeout: this.timeoutMs,
        easterEggs: this.showEasterEggs,
        topMessage: this.topMessage
      });
    }
  }

  private startLoadingSequence(): void {
    // No longer need threshold delay - component shows immediately
    // Just log that we're visible
    if (isDevMode()) {
      console.log('[LoadingComponent] Now visible immediately');
    }

    // Message progression (only if easter eggs enabled and config loaded)
    // This will be triggered when config loads in background
    if (this.showEasterEggs && this.config && this.config.settings.enableEasterEggs) {
      this.scheduleMessageProgression();
    }

    // Timeout handling
    if (this.timeoutMs > 0) {
      const timeoutTimer = setTimeout(() => {
        if (isDevMode()) {
          console.warn('[LoadingComponent] Timed out after', this.timeoutMs, 'ms');
        }
        
        this.timedOut.emit();
      }, this.timeoutMs);
      
      this.timers.push(timeoutTimer);
    }
  }

  private scheduleMessageProgression(): void {
    if (!this.config) return;

    const messages = this.config.messages.progression;
    let currentDelay = this.config.settings.messageProgressionDelayMs;

    for (let i = 0; i < messages.length; i++) {
      const msgTimer = setTimeout(() => {
        if (this.visible && !this.error) {
          this.currentMessage = messages[i];
          
          if (isDevMode()) {
            console.log('[LoadingComponent] Message progression:', i, '-', messages[i]);
          }
        }
      }, currentDelay);
      
      this.timers.push(msgTimer);
      
      // Exponential backoff for message timing
      const growthFactor = this.config.settings.messageDelayGrowthFactor;
      const maxDelay = this.config.settings.messageDelayMaxMs;
      currentDelay += Math.min(currentDelay * growthFactor, maxDelay);
    }
  }

  onRetry(): void {
    if (isDevMode()) {
      console.log('[LoadingComponent] Retry clicked');
    }
    
    this.retry.emit();
  }

  getCurrentMessage(): string {
    return this.error || this.currentMessage || this.message;
  }

  getRetryMessage(): string {
    if (this.isRetrying && this.config) {
      return this.config.retryingMessage;
    }
    return this.isRetrying ? 'Retrying...' : this.retryMessage;
  }

  // Size calculations for responsive design
  get spinnerSize(): string {
    switch (this.size) {
      case 'small': return '40px';
      case 'large': return '80px';
      default: return '60px';
    }
  }

  get textSize(): string {
    switch (this.size) {
      case 'small': return '0.875rem';
      case 'large': return '1.25rem';
      default: return '1rem';
    }
  }

  get containerClasses(): { [key: string]: boolean } {
    return {
      'loading-container': true,
      [`size-${this.size}`]: true,
      'error-state': !!this.error,
      'visible': this.visible
    };
  }
}
