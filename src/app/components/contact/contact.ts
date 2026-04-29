import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    shootType: 'Wedding',
    date: '',
    message: ''
  };

  shootTypes = ['Wedding', 'Portrait', 'Event', 'Fashion', 'Product', 'Travel'];

  onSubmit() {
    console.log('Booking Request:', this.formData);
    alert('Thank you! Your booking request has been sent. (Demo)');
    // Reset form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      shootType: 'Wedding',
      date: '',
      message: ''
    };
  }
}
