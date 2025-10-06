import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of, filter, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../../../../services/error-handler.service';

export interface ISocialPlatform {
  platform: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  external: boolean;
}

export interface IPersonalInfo {
  name: string;
  title: string;
  profile: {
    image: {
      src: string;
      alt: string;
    };
  };
  status?: {
    // Sash configuration properties
    startAngle?: number;
    text?: string;
    isVisible?: boolean;
  };
  career: {
    startYear: number;
  };
  location: {
    current: string;
    origin: string;
  };
  institution: {
    name: string;
    fullName: string;
    university: string;
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
  contact: {
    email: string;
    social: ISocialPlatform[];
  };
  bio: {
    tagline: string;
    summary: string;
    author: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  private personalInfoSubject = new BehaviorSubject<IPersonalInfo | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  // Public observables
  public personalInfo$ = this.personalInfoSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();
  public error$ = this.errorSubject.asObservable();

  // Cached data to prevent multiple HTTP requests
  private cachedPersonalInfo: IPersonalInfo | null = null;
  private isLoading = false;
  private errorHandler = inject(ErrorHandlerService);

  constructor(private http: HttpClient) {}

  /**
   * Get personal info observable - triggers loading if not cached
   */
  getPersonalInfo(): Observable<IPersonalInfo | null> {
    // If we have cached data, return it immediately
    if (this.cachedPersonalInfo) {
      return of(this.cachedPersonalInfo);
    }

    // If already loading, return the observable (will emit when loaded)
    if (this.isLoading) {
      return this.personalInfo$;
    }

    // Start loading
    this.loadPersonalInfo();
    return this.personalInfo$;
  }

  /**
   * Internal method to load personal info
   */
  private async loadPersonalInfo(): Promise<void> {
    if (this.isLoading || this.cachedPersonalInfo) {
      return;
    }

    try {
      this.isLoading = true;
      this.loadingSubject.next(true);
      this.errorSubject.next(null);

      // Use standard HttpClient - interceptor handles all enhancements automatically
      const data = await firstValueFrom(this.http.get<IPersonalInfo>('assets/data/personal-info.json'));

      this.cachedPersonalInfo = data;
      this.personalInfoSubject.next(data);
      this.loadingSubject.next(false);
    } catch (error) {
      const sanitizedError = this.errorHandler.sanitizeError(error, 'personal information');
      this.errorSubject.next(sanitizedError);
      this.loadingSubject.next(false);
      this.personalInfoSubject.next(null);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Get current personal info synchronously (for templates)
   */
  getCurrentPersonalInfo(): IPersonalInfo | null {
    return this.personalInfoSubject.value;
  }

  /**
   * Retry loading data
   */
  async retry(): Promise<void> {
    this.cachedPersonalInfo = null; // Reset cache
    this.personalInfoSubject.next(null);
    await this.getPersonalInfo();
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cachedPersonalInfo = null;
    this.personalInfoSubject.next(null);
  }
}
