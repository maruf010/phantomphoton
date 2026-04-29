import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../../data/portfolio.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent {
  services = SERVICES;
}
