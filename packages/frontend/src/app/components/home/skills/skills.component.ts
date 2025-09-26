import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from '../../shared/separator/separator.component';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { SkillsData, SkillContext, SectionHeader } from '../../../models/skills-definitions';
import { SkillsService } from '../about/services/skills.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SeparatorComponent, LoadingComponent],
  template: `
    <app-loading *ngIf="isLoading" message="Loading skills..." size="medium"></app-loading>
    <app-loading *ngIf="!isLoading && error"
                 [error]="error"
                 [showRetry]="true"
                 [isRetrying]="isRetrying"
                 (retry)="retryLoad()"
                 message="Failed to load skills"
                 size="medium"></app-loading>

    <section *ngIf="!isLoading && !error" class="nutshell-container" data-section="section2" id="section2">
      <div class="nutshell-content">
        <h2 class="section-title">In a Nutshell</h2>

        <p class="casual-pitch">
          {{ sectionHeader.casualPitch }}
        </p>

        <div class="skills-breakdown">
          <div class="skill-context" *ngFor="let context of skillContexts">
            <span class="context-label">{{ context.label }}</span>
            <span class="context-skills">{{ context.skills }}</span>
          </div>
        </div>

        <p class="toolkit-note">{{ sectionHeader.toolkitNote }}</p>
      </div>
    </section>

    <app-separator [variant]="'elegant'" [showIcon]="true" [showParticles]="true">
      <div icon>⭐</div>
    </app-separator>
  `,
  styles: [`
    .nutshell-container {
      
      max-width: 850px;
      margin: 80px auto;
      z-index: 10;
      position: relative;

      /* Performance optimizations for blur effects */
      transform: translateZ(0);
      will-change: transform;
      contain: layout style paint;

      /* Semi-transparent background with theme integration - removed expensive noise effect */
      background:
        radial-gradient(circle at 50% 50%,
          hsla(var(--color-primary-hue), 60%, 20%, 0.08) 0%,
          hsla(var(--color-primary-hue), 40%, 15%, 0.15) 40%,
          hsla(var(--color-primary-hue), 30%, 10%, 0.25) 100%);

      /* Removed expensive backdrop-filter blur for performance */
      border-radius: 16px;
      border: 1px solid hsla(var(--color-primary-hue), 50%, 50%, 0.15);
      box-shadow:
        0 4px 20px hsla(var(--color-primary-hue), 60%, 30%, 0.2),
        inset 0 1px 0 hsla(var(--color-primary-hue), 70%, 80%, 0.08);

      transition: all 0.3s ease;
    }

    /* Light theme overrides for better contrast */
    [data-theme="light"] .nutshell-container {
      /* Lighter background gradient for light mode - removed expensive noise effect */
      background:
        radial-gradient(circle at 50% 50%,
          hsla(var(--color-primary-hue), 60%, 90%, 0.06) 0%,
          hsla(var(--color-primary-hue), 40%, 95%, 0.08) 40%,
          hsla(var(--color-primary-hue), 30%, 98%, 0.12) 100%);

      /* Lighter borders and shadows for light mode */
      border: 1px solid hsla(var(--color-primary-hue), 50%, 50%, 0.08);
      box-shadow:
        0 4px 20px hsla(var(--color-primary-hue), 60%, 30%, 0.1),
        inset 0 1px 0 hsla(var(--color-primary-hue), 70%, 80%, 0.04);
    }

    .nutshell-container:hover {
      transform: translateY(-1px);
      box-shadow:
        0 8px 30px hsla(var(--color-primary-hue), 60%, 30%, 0.25),
        inset 0 1px 0 hsla(var(--color-primary-hue), 70%, 80%, 0.1);
    }

    [data-theme="light"] .nutshell-container:hover {
      box-shadow:
        0 8px 30px hsla(var(--color-primary-hue), 60%, 30%, 0.15),
        inset 0 1px 0 hsla(var(--color-primary-hue), 70%, 80%, 0.06);
    }

    .nutshell-content {
      padding: 2rem 2.5rem;
      position: relative;
    }

    .nutshell-content::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--color-primary, #4058d3) 30%,
        var(--color-secondary, #a43f49) 70%,
        transparent 100%
      );
    }

    .section-title {
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--color-text-primary, #ffffff);
      margin-bottom: 2rem;
      letter-spacing: -0.01em;
      position: relative;
      display: inline-block;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 60px;
      height: 2px;
      background: linear-gradient(
        90deg,
        var(--color-primary, #4058d3),
        var(--color-secondary, #a43f49)
      );
      border-radius: 1px;
    }

    .casual-pitch {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--color-text-primary, #cccccc);
      margin-bottom: 2.5rem;
      font-weight: 300;
      position: relative;
      padding-left: 1rem;
    }

    .casual-pitch::before {
      content: '"';
      position: absolute;
      left: 0;
      top: -5px;
      font-size: 2rem;
      color: var(--color-primary, #4058d3);
      font-family: serif;
      opacity: 0.7;
    }

    .skills-breakdown {
      margin-bottom: 2rem;
    }

    .skill-context {
      display: flex;
      margin-bottom: 1.2rem;
      align-items: baseline;
      gap: 1.2rem;
      padding: 1rem 1.2rem;
      background:
        radial-gradient(circle at 50% 50%,
          hsla(var(--color-primary-hue), 60%, 25%, 0.05) 0%,
          hsla(var(--color-primary-hue), 40%, 20%, 0.08) 100%);
      border-radius: 8px;
      border: 1px solid hsla(var(--color-primary-hue), 50%, 50%, 0.1);
      transition: all 0.3s ease;
      position: relative;
    }

    /* Light theme skill context */
    [data-theme="light"] .skill-context {
      background:
        radial-gradient(circle at 50% 50%,
          hsla(var(--color-primary-hue), 60%, 95%, 0.04) 0%,
          hsla(var(--color-primary-hue), 40%, 98%, 0.06) 100%);
      border: 1px solid hsla(var(--color-primary-hue), 50%, 50%, 0.06);
    }

    .skill-context:hover {
      background:
        radial-gradient(circle at 50% 50%,
          hsla(var(--color-primary-hue), 60%, 30%, 0.08) 0%,
          hsla(var(--color-primary-hue), 40%, 25%, 0.12) 100%);
      border-color: hsla(var(--color-primary-hue), 50%, 50%, 0.2);
      transform: translateX(4px);
      box-shadow: 0 4px 15px hsla(var(--color-primary-hue), 60%, 30%, 0.15);
    }

    [data-theme="light"] .skill-context:hover {
      background:
        radial-gradient(circle at 50% 50%,
          hsla(var(--color-primary-hue), 60%, 92%, 0.06) 0%,
          hsla(var(--color-primary-hue), 40%, 96%, 0.08) 100%);
      border-color: hsla(var(--color-primary-hue), 50%, 50%, 0.12);
      box-shadow: 0 4px 15px hsla(var(--color-primary-hue), 60%, 30%, 0.08);
    }

    .context-label {
      font-size: 0.95rem;
      color: var(--color-secondary-dark, #999999);
      min-width: 200px;
      font-weight: 500;
      flex-shrink: 0;
      position: relative;
    }

    .context-label::after {
      content: ':';
      color: var(--color-primary, #4058d3);
      font-weight: 600;
      margin-right: 0.5rem;
    }

    .context-skills {
      font-size: 0.95rem;
      color: var(--color-text-tertiary, #ffffff);
      line-height: 1.4;
      font-weight: 400;
      flex: 1;
    }

    .toolkit-note {
      font-size: 0.9rem;
      color: var(--color-text-primary, #777777);
      font-style: italic;
      margin-top: 1.5rem;
      text-align: center;
      position: relative;
      padding-top: 1rem;
    }

    .toolkit-note::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 1px;
      background: var(--color-border-primary, rgba(250, 250, 250, 0.2));
    }

    @media (max-width: 768px) {
      .nutshell-container {
        padding: 3rem 0 80px 0;
        margin: 0 1rem;
        border-radius: 12px;
      }

      .nutshell-content {
        padding: 1.5rem 2rem;
      }

      .section-title {
        font-size: 1.6rem;
      }

      .skill-context {
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.8rem 1rem;
        margin-bottom: 1rem;
      }

      .context-label {
        min-width: auto;
        font-weight: 600;
      }

      .casual-pitch {
        font-size: 1rem;
        padding-left: 0.8rem;
      }

      .casual-pitch::before {
        font-size: 1.8rem;
        top: -3px;
      }
    }

    @media (max-width: 480px) {
      .nutshell-content {
        padding: 1rem 1.5rem;
      }

      .section-title {
        font-size: 1.4rem;
      }

      .skill-context {
        padding: 0.6rem 0.8rem;
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  skillContexts: SkillContext[] = [];
  sectionHeader: SectionHeader = {
    title: '',
    description: '',
    casualPitch: '',
    toolkitNote: ''
  };

  isLoading: boolean = true;
  error: string | null = null;
  isRetrying: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.loadSkillsData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private async loadSkillsData() {
    try {
      this.isLoading = true;
      this.error = null;
      const skillsObservable = await this.skillsService.getSkillsData();
      this.subscription.add(
        skillsObservable.subscribe({
          next: (data: SkillsData) => {
            this.skillContexts = data.skills;
            this.sectionHeader = data.sectionHeader;
            this.isLoading = false;
            this.isRetrying = false;
          },
          error: (error: any) => {
            console.error('Error loading skills data:', error);
            // Set error state and provide fallback values
            const msg = error && error.message ? error.message : 'Failed to load skills data';
            this.error = msg;
            this.skillContexts = [];
            this.sectionHeader = {
              title: 'My Skills',
              description: 'Skills loading...',
              casualPitch: 'Loading...',
              toolkitNote: 'Loading...'
            };
            this.isLoading = false;
            this.isRetrying = false;
          }
        })
      );
    } catch (error) {
      console.error('Error initializing skills data:', error);
      this.error = error && (error as any).message ? (error as any).message : 'Failed to initialize skills data';
      this.isLoading = false;
      this.isRetrying = false;
    }
  }

  retryLoad(): void {
    this.isRetrying = true;
    this.isLoading = true;
    this.error = null;
    this.skillContexts = [];
    this.sectionHeader = {
      title: '',
      description: '',
      casualPitch: '',
      toolkitNote: ''
    };

    // Clean up previous subscriptions and re-load
    try {
      this.subscription.unsubscribe();
    } catch (e) {
      // ignore
    }
    this.subscription = new Subscription();
    // Try to use the service retry helper if available
    (async () => {
      try {
        if (typeof this.skillsService.retry === 'function') await this.skillsService.retry();
      } catch (e) {
        // ignore - loadSkillsData will attempt again
      }
      this.loadSkillsData();
    })();
  }
}