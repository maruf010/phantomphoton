import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GALLERY } from '../../data/portfolio.data';
import { GalleryItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent {
  galleryItems = GALLERY;
  categories: GalleryItem['category'][] = ['All', 'Wedding', 'Portrait', 'Event', 'Fashion', 'Product'];
  
  selectedCategory = signal<GalleryItem['category']>('All');
  
  filteredGallery = computed(() => {
    const category = this.selectedCategory();
    if (category === 'All') return this.galleryItems;
    return this.galleryItems.filter(item => item.category === category);
  });

  selectedImage = signal<GalleryItem | null>(null);

  filterByCategory(category: GalleryItem['category']) {
    this.selectedCategory.set(category);
  }

  openLightbox(item: GalleryItem) {
    this.selectedImage.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage.set(null);
    document.body.style.overflow = 'auto';
  }
}
