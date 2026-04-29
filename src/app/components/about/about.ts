import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '300+', label: 'Photoshoots' },
    { value: '120+', label: 'Happy Clients' },
    { value: '20+', label: 'Awards Won' },
  ];
}
