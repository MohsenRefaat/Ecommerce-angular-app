import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ICategory } from '../../models/icategory';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule,FormsModule],
  providers: [ProductsService],
  standalone:true,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
  
  catList:ICategory[];
  newPrd:IProduct={}as IProduct;
  constructor(private prdService: ProductsService
    , private router: Router) {
      this.catList=[
        {id:1, name:'Labtops'},
        {id:2, name:'Tablets'},
        {id:3, name:'Mobiles'},
      ]
  }
  ngOnInit(): void {
  }
  addProduct() {
    // const prd: IProduct = {
    //   id: 100,
    //   name: 'New Taplet',
    //   price: 100,
    //   quantity: 10,
    //   categoryID: 2,
    //   imgURL: ''
    // }
    const observer={
      next:(prd:IProduct)=>{
          alert("Product added Succefuly") // snackpar *|| Toast || BS Alert
          this.router.navigateByUrl('/Products');
        },
        error:(err:Error)=>{alert(err.message)}
      }
      this.prdService.addProduct(this.newPrd).subscribe(observer);
    }
  }


