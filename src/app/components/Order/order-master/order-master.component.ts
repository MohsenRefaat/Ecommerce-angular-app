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
  const clientName = this.clientNameInpElem.nativeElement.value;

  if (!clientName) {
    alert("Please enter your name before placing the order.");
    return;
  }

  if (!this.prdListComObj || !this.prdListComObj.prdList) {
    alert("Products list is not ready yet.");
    return;
  }

const selectedProducts = this.prdListComObj.prdList.filter((p: { quantity: number }) => p.quantity > 0);
  if (selectedProducts.length === 0) {
    alert("No products selected.");
    return;
  }

  console.log("Order placed by:", clientName);
  console.log("Products:", selectedProducts);
  console.log("Total Price:", this.receivedOrderTotalPrice);

  alert("Order placed successfully!");
}
}
