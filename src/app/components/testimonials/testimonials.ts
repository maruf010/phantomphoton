import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS } from '../../data/portfolio.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsComponent {
  testimonials = TESTIMONIALS;
  currentIndex = signal(0);

  next() {
    this.currentIndex.update(i => (i + 1) % this.testimonials.length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  setIndex(i: number) {
    this.currentIndex.set(i);
  }
}
