import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ICategory } from '../../../models/icategory';
import { ProductListComponent } from "../product-list/product-list.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-master',
  imports: [ProductListComponent,CommonModule,FormsModule],
  templateUrl: './order-master.component.html',
  standalone:true,
  styleUrl: './order-master.component.scss'
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  selectedCatID:number=0;
  receivedOrderTotalPrice:number=0
  catList:ICategory[];
  // clientNameInpElem?:ElementRef; //optional or save navigation Operator
  @ViewChild('clientNameInp') clientNameInpElem!:ElementRef;  //non-null assertion operator
  @ViewChild (ProductListComponent) prdListComObj!:ProductListComponent;
  constructor () {
    this.catList=[
      {id:1, name:'Labtops'},
      {id:2, name:'Tablets'},
      {id:3, name:'Mobiles'},

      
    ]
  }
  ngAfterViewInit(): void {
    this.clientNameInpElem.nativeElement.value="Mo7sen refaat";
    this.clientNameInpElem.nativeElement.style.border="2px solid red"
    // this.prdListComObj.prdList
    ;
  }
  ngOnInit(): void {
    ;
  }
  onTotalPriceChanged(totalPrice:number) {
  this.receivedOrderTotalPrice=totalPrice;
  }
  completeOrder () {
    // this.prdListComObj.prdList[0].quantity-=1;
  }

}
