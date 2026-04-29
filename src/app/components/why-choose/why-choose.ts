import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose.html',
  styleUrl: './why-choose.scss',
})
export class WhyChooseComponent {
  points = [
    { icon: 'auto_fix_high', title: 'Creative Direction', desc: 'Expert guidance on poses, lighting, and styling to make every shot perfect.' },
    { icon: 'camera', title: 'High-End Equipment', desc: 'Using the latest mirrorless tech and premium lenses for crystal clear results.' },
    { icon: 'edit', title: 'Professional Editing', desc: 'Signature color grading and retouching that gives your photos a cinematic feel.' },
    { icon: 'speed', title: 'Fast Delivery', desc: 'Quick turnaround time with sneak peeks delivered within 48 hours.' },
    { icon: 'movie', title: 'Cinematic Storytelling', desc: 'Capturing the narrative and emotions, not just the faces.' },
    { icon: 'sentiment_very_satisfied', title: 'Client Experience', desc: 'A friendly, professional environment that makes you feel comfortable.' },
  ];
}
