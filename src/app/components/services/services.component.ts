import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports:[CommonModule],
  standalone:true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services = [
    {
      icon: 'fas fa-calendar-alt',
      title: 'Browse Events',
      description: 'Discover upcoming workshops, tech courses, and seminars.'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'Register & Add to Cart',
      description: 'Register for events and add them to your personal cart.'
    },
    {
      icon: 'fas fa-bell',
      title: 'Notifications',
      description: 'Stay updated with the latest events and announcements.'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Event Overview',
      description: 'View event date, time, description, and location.'
    },
    {
      icon: 'fas fa-user',
      title: 'User Login/Register',
      description: 'Create your account and manage your bookings easily.'
    },
    {
      icon: 'fas fa-code',
      title: 'Built with Angular',
      description: 'Modern design with responsive layout and Angular framework.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
