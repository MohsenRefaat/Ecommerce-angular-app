import { IProduct } from '../models/iproduct';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, pipe, retry, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { stringify } from 'querystring';
import { APIResponseVM } from '../view models/apiresponse-vm';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOption;

  constructor( private httpClient:HttpClient) {
    const baseUrl = environment.apiUrl;
console.log('API URL:', baseUrl);

    this.httpOption={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization:'my-auth-token'
      })
    }
   }
   private handleError(error:HttpErrorResponse) {
    if (error.status===0) {
      console.error('an error occured:', error.error)

    }else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      ()=>new Error ('Error occured, Please try again')

    )
   }
  
   getAllProducts(): Observable<IProduct[]> 
  {
    // return this.genericAPIHandler.getAll('/Products')
    // .pipe(
    //   map((APIResponseVM:APIResponseVM)=>{
    //     return APIResponseVM.data;
        
    //   })
    // )
   return this.httpClient.get<IProduct[]>(`${environment.apiUrl}/prd`)
   .pipe(
    retry(2),
    catchError(this.handleError)
    );
  }
  getProductsByCatID(catID:number): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.apiUrl}/prd?categoryID=${catID}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
      );
  }
  getProductByID(prdID : number): Observable<IProduct>  
  {
    return this.httpClient.get<IProduct>(`${environment.apiUrl}/prd/${prdID}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
      );
  }
  addProduct(newPrd: IProduct): Observable<IProduct> {
    // return this.httpClient
    // .post<IProduct>('http://localhost:3000/Products',JSON.stringify(newPrd), this.httpOption)
    // .pipe(
    //   retry(2),
    //   catchError((err)=>{
    //     console.log(err)
    //     return throwError(()=> new Error('Post Error'));
    //   })
    // );
      return this.httpClient
    .post<IProduct>(`${environment.apiUrl}/prd`,JSON.stringify(newPrd), this.httpOption)
    .pipe(
    retry(2),
    catchError(this.handleError)
    );
    
  }

  
  updateProduct ()
  {

  }
  deleteProduct(prdID:number, UpdatedPrd:IProduct)
  {

  }
}
