import { Component, signal, OnInit, inject } from '@angular/core';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { PortfolioService } from '../../../services/portfolio.service';
import { PortfolioCardData } from './portfolio-card/portfolio-card.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioCardComponent, LoadingComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  private portfolioService = inject(PortfolioService);

  // Modern Angular Signals for reactive data
  portfolioItems = signal<PortfolioCardData[]>([]);
  categories = signal<{id: string, label: string, isDefault?: boolean}[]>([]);
  sectionHeader = signal<{title: string, description: string} | null>(null);
  activeFilter = signal<string>('all');
  filteredItems = signal<PortfolioCardData[]>([]);
  
  // Loading and error states
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  async ngOnInit() {
    // Load portfolio data from JSON
    await this.portfolioService.loadPortfolioData();
    
    // Subscribe to service signals
    const data = this.portfolioService.portfolioData();
    const loading = this.portfolioService.isLoading();
    const error = this.portfolioService.error();
    
    this.isLoading.set(loading);
    this.error.set(error);
    
    if (data) {
      this.portfolioItems.set(data.projects);
      this.categories.set(data.categories || []);
      this.sectionHeader.set(data.sectionHeader);
      
      // Set default filter
      const defaultCategory = data.categories?.find(cat => cat.isDefault);
      if (defaultCategory) {
        this.activeFilter.set(defaultCategory.id);
      }
    }
    
    // Initialize filtered items
    this.updateFilteredItems();
  }

  filterItems(category: string): void {
    this.activeFilter.set(category);
    this.updateFilteredItems();
  }

  private updateFilteredItems(): void {
    const filter = this.activeFilter();
    const items = this.portfolioService.getProjectsByCategory(filter);
    this.filteredItems.set(items);
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/portfolio-placeholder.jpg';
  }
}
