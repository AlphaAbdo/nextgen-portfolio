import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoService, IPersonalInfo, ISocialPlatform } from '../services/personal-info.service';
import { SocialCardComponent } from './social-card/social-card.component';

@Component({
  selector: 'app-connect-collaborate',
  imports: [CommonModule, SocialCardComponent],
  templateUrl: './connect-collaborate.component.html',
  styleUrls: ['./connect-collaborate.component.scss']
})
export class ConnectCollaborateComponent implements OnInit {
  private personalInfoService = inject(PersonalInfoService);

  // Reactive state with signals
  personalInfo = signal<IPersonalInfo | null>(null);
  isLoading = signal(true);

  // Computed social platforms from data
  socialPlatforms = signal<ISocialPlatform[]>([]);

  ngOnInit() {
    this.loadPersonalInfo();
  }

  private loadPersonalInfo() {
    this.personalInfoService.getPersonalInfo().subscribe({
      next: (data: IPersonalInfo | null) => {
        this.personalInfo.set(data);
        this.socialPlatforms.set(data?.contact?.social || []);
        this.isLoading.set(false);
      },
      error: () => {
        // For portfolio, just set empty state - no complex error handling needed
        this.isLoading.set(false);
      }
    });
  }
}
