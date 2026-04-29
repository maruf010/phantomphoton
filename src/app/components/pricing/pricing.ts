import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRICING } from '../../data/portfolio.data';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class PricingComponent {
  packages = PRICING;
}
