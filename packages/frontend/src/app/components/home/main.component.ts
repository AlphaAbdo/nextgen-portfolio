import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsTreeComponent } from './skills/skills-tree.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AnimatedBackgroundComponent } from '../shared/animated-background/animated-background.component';
import { ThemeSwitcherComponent } from '../shared/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    SkillsTreeComponent,
    PortfolioComponent,
    AnimatedBackgroundComponent,
    ThemeSwitcherComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class HomeMainComponent {
  // Container logic
}