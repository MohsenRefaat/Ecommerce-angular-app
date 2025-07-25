import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { CartService } from './services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  [x: string]: any;
  private prdList: IProduct[];

  constructor() {
    this.prdList = [
      {
        id: 100,
        name: 'LenovoThinkpad laptop',
        price: 100000000,
        quantity: 1,
        imgURL: ['assets/mo7sen 2.webp'],
        categoryID: 1
      },
      {
        id: 200,
        name: 'Apple Mactop laptop',
        price: 20656560,
        quantity: 0,
        imgURL: ['assets/mo7sen 3.jpg'],
        categoryID: 1
      },
      {
        id: 300,
        name: 'Lenovo Tablet 2',
        price: 3000,
        quantity: 10,
        imgURL: ['assets/mo7sen 4.jpg'],
        categoryID: 2
      },
      {
        id: 400,
        name: 'IPad ',
        price: 400,
        quantity: 2,
        imgURL: ['assets/mo7sen 5.avif'],
        categoryID: 2
      },
      {
        id: 500,
        name: 'Samsung Tablet',
        price: 5000,
        quantity: 0,
        imgURL: ['assets/mo7sen 9.webp'],
        categoryID: 3
      },
      {
        id: 600,
        name: 'Samsung note 10',
        price: 600,
        quantity: 1,
        imgURL: ['assets/mo7sen 7.webp'],
        categoryID: 3
      }
    ];
  }

  getAllProducts(): IProduct[] {
    console.log(this.prdList);
    return this.prdList;
  }

  getProductsByCatID(cID: number): IProduct[] {
    if (cID == 0) return this.prdList;
    else return this.prdList.filter(prd => prd.categoryID == cID);
  }

  getProductByID(pID: number): IProduct | null {
    let foundProduct = this.prdList.find(prd => prd.id == pID);
    return foundProduct ? foundProduct : null;
  }

  addNewProduct(prd: IProduct) {
    this.prdList.push(prd);
  }

  getPrdIDs({ currPrdID }: { currPrdID: number }): number[] {
    let prdIDs: number[] = this.prdList.map(prd => prd.id);
    return prdIDs;
  }
}
