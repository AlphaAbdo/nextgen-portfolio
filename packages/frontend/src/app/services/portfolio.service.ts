import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { PortfolioCardData } from '../components/home/portfolio/portfolio-card/portfolio-card.interface';
import { ErrorHandlerService } from './error-handler.service';

interface PortfolioResponse {
  sectionHeader: {
    title: string;
    description: string;
  };
  categories?: {  // Made optional since we generate dynamically
    id: string;
    label: string;
    isDefault?: boolean;
  }[];
  projects: PortfolioCardData[];
  metadata?: {
    defaultFilter: string;
    sortBy: string;
    animationType: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private http = inject(HttpClient);
  private errorHandler = inject(ErrorHandlerService);
  
  // Signals for reactive data
  portfolioData = signal<PortfolioResponse | null>(null);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  private isLoadingData = false; // Guard against multiple simultaneous calls

  async loadPortfolioData(): Promise<void> {
    // Prevent multiple simultaneous calls
    if (this.isLoadingData) {
      return;
    }

    this.isLoadingData = true;

    try {
      this.isLoading.set(true);
      this.error.set(null);

      // Use standard HttpClient - interceptor handles all enhancements automatically
      const data = await firstValueFrom(this.http.get<PortfolioResponse>('assets/data/portfolio.json'));

      // Process the data
      const processedData = this.processPortfolioData(data);

      // Update signals
      this.portfolioData.set(processedData);
      this.isLoading.set(false);
    } catch (error) {
      const sanitizedError = this.errorHandler.sanitizeError(error, 'portfolio data');
      this.error.set(sanitizedError);
      this.isLoading.set(false);
    } finally {
      this.isLoadingData = false;
    }
  }

  private processPortfolioData(data: PortfolioResponse): PortfolioResponse {
    // Validate and process the data
    const processedProjects = data.projects.map(project => ({
      ...project,
      // Ensure all required fields exist with fallbacks
      background: {
        type: project.background?.type || 'image',
        content: project.background?.content || 'assets/images/portfolio-placeholder.jpg',
        attributes: project.background?.attributes || {}
      },
      metadata: {
        tech: project.metadata?.tech || [],
        year: project.metadata?.year || new Date().getFullYear().toString(),
        status: project.metadata?.status || 'completed',
        featured: project.metadata?.featured || false
      }
    }));

    // Dynamically generate categories based on actual projects
    const dynamicCategories = this.generateCategoriesFromProjects(processedProjects);

    return {
      ...data,
      projects: processedProjects,
      categories: dynamicCategories
    };
  }

  private generateCategoriesFromProjects(projects: PortfolioCardData[]): {id: string, label: string, isDefault?: boolean}[] {
    // Extract unique categories from projects
    const uniqueCategories = [...new Set(projects.map(project => project.category))];

    // Define category labels mapping
    const categoryLabels: Record<string, string> = {
      'solo': 'Solo Projects',
      'collaborated': 'Collaborative Projects',
      'web': 'Web Development',
      'graphics': 'Graphics & 3D',
      'mobile': 'Mobile Apps',
      'desktop': 'Desktop Applications',
      'game': 'Games',
      'ai': 'AI & Machine Learning',
      'data': 'Data Science',
      'other': 'Other Projects'
    };

    // Create category objects
    const categories = uniqueCategories.map(categoryId => ({
      id: categoryId,
      label: categoryLabels[categoryId] || this.capitalizeFirstLetter(categoryId.replace('-', ' ')),
      isDefault: false
    }));

    // Always add "All Projects" as first and default
    categories.unshift({
      id: 'all',
      label: 'All Projects',
      isDefault: true
    });

    return categories;
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getProjectsByCategory(category: string): PortfolioCardData[] {
    const data = this.portfolioData();
    if (!data) return [];

    if (category === 'all') {
      return data.projects;
    }

    return data.projects.filter(project => 
      project.category.toLowerCase() === category.toLowerCase()
    );
  }

  getFeaturedProjects(): PortfolioCardData[] {
    const data = this.portfolioData();
    if (!data) return [];

    return data.projects.filter(project => project.metadata?.featured);
  }

  getProjectById(id: string): PortfolioCardData | null {
    const data = this.portfolioData();
    if (!data) return null;

    return data.projects.find(project => project.id === id) || null;
  }
}
