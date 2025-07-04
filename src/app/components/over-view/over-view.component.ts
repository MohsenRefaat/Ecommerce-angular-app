import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-over-view',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './over-view.component.html',
  styleUrl: './over-view.component.scss'
})
export class OverviewComponent {
  phoneList = [ 
    {
      name: 'iPhone 14 Pro',
      imgURL: 'assets/images.jpg',
      price: 45000
    },
    {
      name: 'IPhone 16 pro max',
      imgURL: 'assets/images (2).jpg',
      price: 42000
    },
    {
      name: 'IPhone 11',
      imgURL: 'assets/images (1).jpg',
      price: 25000
    }
  ];
}
