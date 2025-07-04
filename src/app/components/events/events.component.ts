import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events = [
    {
      id: 1,
      title: 'Angular Web Development Workshop',
      date: '2025-07-15',
      location: 'Online',
      description: 'A 3-day training workshop to learn Angular basics.',
      image: 'https://picsum.photos/300/200?random=1'
    },
    {
      id: 2,
      title: 'AI and Machine Learning Seminar',
      date: '2025-08-01',
      location: 'Cairo',
      description: 'An introduction to modern AI concepts and applications.',
      image: 'https://picsum.photos/300/200?random=2'
    }
  ];

 constructor() { }

ngOnInit(): void {
}

register(eventTitle: string) {
  alert(`Registered for: ${eventTitle}`);
}


}
