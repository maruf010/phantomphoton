import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { GalleryComponent } from './components/gallery/gallery';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects';
import { WhyChooseComponent } from './components/why-choose/why-choose';
import { ProcessComponent } from './components/process/process';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { PricingComponent } from './components/pricing/pricing';
import { FaqComponent } from './components/faq/faq';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    FeaturedProjectsComponent,
    WhyChooseComponent,
    ProcessComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
