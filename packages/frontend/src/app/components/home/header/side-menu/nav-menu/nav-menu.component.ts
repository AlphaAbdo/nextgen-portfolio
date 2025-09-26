import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { INavItem } from '../../header.types';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  @Input() menuItems: INavItem[] = [];
  @Input() activeSection: string | null = null;

  @Output() navigate = new EventEmitter<string>();

  handleNavigateClick(event: Event, section: string) {
    event.preventDefault();
    this.navigate.emit(section);
  }
}
