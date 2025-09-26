import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import type { INavItem, MenuAction } from '../header.types';
import { CommonModule } from '@angular/common';
import { CvDownloadComponent } from './cv-download/cv-download.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SkillsService } from '../../about/services/skills.service';
import { PersonalInfoService, IPersonalInfo } from '../../about/services/personal-info.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, CvDownloadComponent, NavMenuComponent],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() isReduced = false;
  @Input() isOpen = false;
  @Input() activeSection: string | null = null;
  @Input() menuInteraction$?: Subject<MenuAction>;

  @Output() navigate = new EventEmitter<string>();
  @Output() closeMenu = new EventEmitter<void>();

  cvUrl: string = '';
  personalInfo: IPersonalInfo | null = null;

  menuItems: INavItem[] = [
    { section: 'section1', label: 'About', icon: 'fa-user', description: 'About me' },
    { section: 'section2', label: 'Skills', icon: 'fa-code', description: 'My skills' },
    { section: 'section3', label: 'Portfolio', icon: 'fa-briefcase', description: 'My work' }
  ];

  constructor(
    private skillsService: SkillsService,
    private personalInfoService: PersonalInfoService
  ) {}

  ngOnInit() {
    this.loadCvUrl();
    this.loadPersonalInfo();
  }

  private loadPersonalInfo() {
    this.personalInfoService.getPersonalInfo().subscribe({
      next: (data: IPersonalInfo | null) => {
        this.personalInfo = data;
      },
      error: (error) => {
        console.error('Failed to load personal info for side menu:', error);
      }
    });
  }

  private async loadCvUrl() {
    try {
      const observable = await this.skillsService.getSkillsData();
      observable.subscribe((data: any) => {
        if (data?.metadata?.cv?.enabled && data.metadata.cv.url) {
          this.cvUrl = data.metadata.cv.url;
        }
      });
    } catch (error) {
      console.error('Failed to load CV URL:', error);
    }
  }

  handleNavigateClick(event: Event, section: string) {
    // Prevent the anchor from updating the URL hash
    event.preventDefault();
    this.navigate.emit(section);
    // Notify parent-owned menuInteraction channel about navigation
    try { this.menuInteraction$?.next({ kind: 'navigate', payload: section }); } catch (e) {}
  }

  // Forwarded navigation from child nav-menu
  handleNavigate(section: string) {
    this.navigate.emit(section);
    try { this.menuInteraction$?.next({ kind: 'navigate', payload: section }); } catch (e) {}
  }

  emitCloseMenu() {
    this.closeMenu.emit();
  }

}
