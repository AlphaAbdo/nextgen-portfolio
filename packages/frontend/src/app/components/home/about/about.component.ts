import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileShowcaseComponent } from './profile-showcase/profile-showcase.component';
import { JourneyTimelineComponent } from './journey-timeline/journey-timeline.component';
import { ConnectCollaborateComponent } from './connect-collaborate/connect-collaborate.component';
import { SeparatorComponent } from '../../shared/separator/separator.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    ProfileShowcaseComponent,
    JourneyTimelineComponent,
    ConnectCollaborateComponent,
    SeparatorComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // Components now handle their own data loading
  }
}
