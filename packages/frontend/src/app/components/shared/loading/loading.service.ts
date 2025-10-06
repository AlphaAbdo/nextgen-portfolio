import { Injectable, isDevMode } from '@angular/core';

export interface LoadingConfig {
  settings: {
    defaultThresholdMs: number;
    defaultTimeoutMs: number;
    enableEasterEggs: boolean;
    messageProgressionDelayMs: number;
    messageDelayGrowthFactor: number;
    messageDelayMaxMs: number;
  };
  messages: {
    default: string;
    initializing: string;
    progression: string[];
  };
  retryMessages: string[];
  retryingMessage: string;
  easterEggs: {
    topMessages: string[];
  };
}

/**
 * Inlined loading configuration to avoid HTTP dependency during initialization
 * Previously this was loaded via HTTP, which created a circular dependency:
 * - Loading component needs config to show properly
 * - But HTTP hook service is busy initializing (loading environment/outreach configs)
 * - So loading component can't get its config in time!
 * 
 * Solution: Inline the config directly in the service
 */
const INLINE_LOADING_CONFIG: LoadingConfig = {
  settings: {
    defaultThresholdMs: 0,
    defaultTimeoutMs: 15000,
    enableEasterEggs: true,
    messageProgressionDelayMs: 4000,
    messageDelayGrowthFactor: 0.5,
    messageDelayMaxMs: 8000
  },
  messages: {
    default: 'Loading...',
    initializing: 'Loading your content...',
    progression: [
      'Still working on it...',
      'This is taking a bit longer than expected...',
      'Fetching data from the server...',
      'Your data is stuck in traffic... digital traffic',
      'Organizing the bits and bytes...',
      'Meanwhile, somewhere in a data center...',
      'Almost there, promise!',
      'Fun fact: You\'re more patient than 83% of users',
      'The server is thinking really hard about this',
      'Processing... and maybe grabbing a coffee',
      'Loading resources (the fancy way of saying \'please wait\')',
      'This message will disappear when loading completes. Hopefully.',
      'Still here? Thanks for your patience!'
    ]
  },
  retryMessages: [
    'Try Again',
    'Give It Another Shot',
    'Retry',
    'One More Time',
    'Let\'s Try That Again'
  ],
  retryingMessage: 'Giving it another go...',
  easterEggs: {
    topMessages: [
      '👾 Loading magic...',
      '⚡ Charging up...',
      '🔮 Consulting the oracle...',
      '✨ Sprinkling some pixels...',
      '🚀 Launching in 3... 2...',
      '🎯 Taking aim at your data...',
      '⏳ Time is relative anyway'
    ]
  }
};

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  /**
   * Get loading configuration (synchronously, no HTTP required!)
   */
  getConfig(): LoadingConfig {
    if (isDevMode()) {
      console.log('[LoadingService] Returning inline config (no HTTP needed)');
    }
    return INLINE_LOADING_CONFIG;
  }

  /**
   * Get a random retry message
   */
  getRandomRetryMessage(config: LoadingConfig): string {
    const retryMessages = config.retryMessages;
    return retryMessages[Math.floor(Math.random() * retryMessages.length)];
  }

  /**
   * Get a random easter egg top message
   */
  getRandomEasterEgg(config: LoadingConfig): string {
    const easterEggs = config.easterEggs.topMessages;
    return easterEggs[Math.floor(Math.random() * easterEggs.length)];
  }
}
