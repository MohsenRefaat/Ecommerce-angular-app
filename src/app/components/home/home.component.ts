import { Component, OnInit } from '@angular/core';
import { StoreData } from '../../view models/store-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storeInfo: StoreData;

  constructor() {
    this.storeInfo = new StoreData('Img Store', 'https://picsum.photos/350/300', ['Cairo', 'Alex', 'Minia']);
  }

  ngOnInit(): void { }
}
