import { Component, OnInit, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from '../../shared/separator/separator.component';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { SkillsData, TreeBranch, TreeTrunk, Skill } from '../../../models/skills-definitions';
import { SkillsService } from '../about/services/skills.service';
import { ErrorHandlerService } from '../../../services/error-handler.service';

@Component({
  selector: 'app-skills-tree',
  standalone: true,
  imports: [CommonModule, SeparatorComponent, LoadingComponent],
  templateUrl: './skills-tree.component.html',
  styleUrls: ['./skills-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // 🚀 Performance boost
})
export class SkillsTreeComponent implements OnInit {
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);
  isRetrying = signal<boolean>(false);
  
  title = signal<string>('Tech Stack');
  subtitle = signal<string>('');
  description = signal<string>('');
  rootLabel = signal<string>('Software Engineer');
  
  trunk = signal<TreeTrunk | null>(null);
  branches = signal<TreeBranch[]>([]);
  
  leftBranches = computed(() => 
    this.branches().filter(b => b.side === 'left').sort((a, b) => a.position - b.position)
  );
  
  rightBranches = computed(() => 
    this.branches().filter(b => b.side === 'right').sort((a, b) => a.position - b.position)
  );

  constructor(
    private skillsService: SkillsService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.loadSkillsData();
  }

  private async loadSkillsData() {
    try {
      this.isLoading.set(true);
      this.error.set(null);
      
      // Service already returns cached data immediately - no need for complex observables
      const skillsObservable = await this.skillsService.getSkillsData();
      
      // Get the first emitted value directly
      skillsObservable.subscribe({
        next: (data: SkillsData | null) => {
          if (data) {
            // Update section header
            this.title.set(data.sectionHeader.title || 'Tech Stack');
            this.subtitle.set(data.sectionHeader.subtitle || '');
            this.description.set(data.sectionHeader.description || '');
            this.rootLabel.set(data.sectionHeader.rootLabel || 'Software Engineer');
            
            // Update tree data
            if (data.tree) {
              this.trunk.set(data.tree.trunk);
              this.branches.set(data.tree.branches);
            }
          }
          this.isLoading.set(false);
          this.isRetrying.set(false);
        },
        error: (error: any) => {
          console.error('Error loading skills data:', error);
          const sanitizedError = this.errorHandler.sanitizeError(error, 'skills data');
          this.error.set(sanitizedError);
          this.isLoading.set(false);
          this.isRetrying.set(false);
        }
      });
    } catch (error) {
      console.error('Error initializing skills data:', error);
      const sanitizedError = this.errorHandler.sanitizeError(error, 'skills data');
      this.error.set(sanitizedError);
      this.isLoading.set(false);
      this.isRetrying.set(false);
    }
  }

  async retryLoad(): Promise<void> {
    this.isRetrying.set(true);
    this.error.set(null);
    this.trunk.set(null);
    this.branches.set([]);
    
    // Use service retry method
    try {
      await this.skillsService.retry();
    } catch (e) {
      // Will be handled by loadSkillsData
    }
    
    this.loadSkillsData();
  }

  // 🚀 Performance: TrackBy functions to prevent unnecessary re-renders
  trackBySkillName(index: number, skill: Skill): string {
    return skill.name;
  }

  trackByBranchId(index: number, branch: TreeBranch): string {
    return branch.id;
  }

  getLevelClass(level: string): string {
    return `level-${level}`;
  }

  getBranchStyle(branch: TreeBranch): any {
    return {
      '--branch-color': branch.color
    };
  }
}
