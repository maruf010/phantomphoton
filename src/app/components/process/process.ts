import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class ProcessComponent {
  steps = [
    { num: '01', title: 'Consultation', desc: 'We discuss your vision, style preferences, and session details.' },
    { num: '02', title: 'Planning', desc: 'Choosing locations, outfits, and timing for the perfect light.' },
    { num: '03', title: 'Photoshoot', desc: 'The big day! We create magic in a relaxed, fun environment.' },
    { num: '04', title: 'Editing', desc: 'Careful selection and cinematic retouching of your images.' },
    { num: '05', title: 'Final Delivery', desc: 'Your stunning high-res gallery delivered in 2-3 weeks.' },
  ];
}
