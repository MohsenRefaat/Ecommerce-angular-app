import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../src/environment';
import { APIResponseVM } from '../view models/apiresponse-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericAPIHandlerService {
  httpOption: { headers: any; };

  constructor(private httpClient:HttpClient) {
    this.httpOption={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization:'my-auth-token'
      })
    }
  }
  private setHeaders(key:string, value:string)
  {
    this.httpOption.headers.set(key,value);
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
  getAll(APIRoute:string):Observable<APIResponseVM> {
    return this.httpClient.get<APIResponseVM>(`${environment}/${APIRoute}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  // search (searchItems:string[]):Observable<APIResponseVM>
  // {

  // }
  // getByID(ID:Number):Observable<APIResponseVM>
  // {

  // }
  // post(newObject:any):Observable<APIResponseVM>
  // {

  // }
  // put(id:number,newObject:any):Observable<APIResponseVM>
  // {

  // }
  // delete(id:any):Observable<APIResponseVM>
  // {

  // }
}
