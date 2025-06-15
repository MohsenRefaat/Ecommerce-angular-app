import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../../services/static-products.service';
import { IProduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  standalone:true,
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  currPrdID:number=0;
  prd:IProduct| null=null;
  prdIDsArr:number[]=[];
  constructor(private activatedRoute:ActivatedRoute
              ,private prdService:StaticProductsService
              ,private router:Router
              ,private location:Location
              )  {
  
  }
  ngOnInit(): void {
    this.prdIDsArr = this.prdService.getPrdIDs({ currPrdID: 2 });

    console.log("In onInIt")
    // this.currPrdID= Number (this.activatedRoute.snapshot.paramMap.get('pid'));
    // this.prd= this.prdService.getProductByID(this.currPrdID);
    // this.prd=this.prdService.getProductByID this.currPrdID;
    this .activatedRoute.paramMap.subscribe((paraMap)=>{
      this.currPrdID=Number(paraMap.get('pid'));
      this.prd=this.prdService.getProductByID(this.currPrdID)
    })
    
  }
  goBack():void {
    this.location.back();
  }
  prevPrd()
  {
   let currIndex=this.prdIDsArr.findIndex((elem)=>elem==this.currPrdID);
   let prevPrdID;
   if(currIndex>0)
   prevPrdID=this.prdIDsArr[currIndex-1];
  this.router.navigate(['/products',prevPrdID])
  }
  nextPrd()
  {
    let currIndex=this.prdIDsArr.findIndex((elem)=>elem==this.currPrdID);
    let nextPrdID;
    if(currIndex<this.prdIDsArr.length)
      nextPrdID=this.prdIDsArr[currIndex+1];
   this.router.navigate(['/products',nextPrdID])
  } 
}
