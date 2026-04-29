import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FEATURED_PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjectsComponent {
  projects = FEATURED_PROJECTS;
}
