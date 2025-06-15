import { Component, EventEmitter, OnChanges, OnInit, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../../models/iproduct';
import { USDtoEGPPipe } from "../../../pipes/usdto-egp.pipe";
import { LightBoxDirective } from '../../../Directives/light-box.directive';
import { StaticProductsService } from '../../../services/static-products.service';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../../services/services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule, USDtoEGPPipe, LightBoxDirective, RouterModule],
  templateUrl: './product-list.component.html',
  standalone: true,
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {

  prdListOfCat: IProduct[] = [];
  @Input() sentCatID: number = 0;
  @Output() totalPriceChanged: EventEmitter<number> = new EventEmitter<number>();

  orderTotalPrice: number = 0;
  cartCount: number = 0;

  constructor(
    private staticPrdService: StaticProductsService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnChanges(): void {
    // this.prdListOfCat = this.staticPrdService.getProductsByCatID(this.sentCatID);
  }

  ngOnInit(): void {
    this.prdListOfCat = this.staticPrdService.getAllProducts();

    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
      console.log('عدد المنتجات في السلة:', this.cartCount);
    });
  }

  openPrdDetails(prdID: number) {
    this.router.navigate(['/products', prdID]);
  }

  buy(prd: IProduct, count: number = 1): void {
    this.cartService.addToCart(prd, count);
    this.orderTotalPrice += prd.price * count;
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }
}



