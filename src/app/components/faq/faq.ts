import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQS } from '../../data/portfolio.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class FaqComponent {
  faqs = FAQS;
  openId = signal<number | null>(1);

  toggle(id: number) {
    this.openId.update(current => current === id ? null : id);
  }
}
