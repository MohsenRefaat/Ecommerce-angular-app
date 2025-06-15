import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
 private adsList:string[];
  constructor() { 
    this.adsList=["Big Discounts"
                 ,"Sale up To 50%"
                 ,"Check Our White Friday"
                 ,""
                 ,"Special White Friday offers up to 70%" 
    ]
  }
  getSheduledAds(intervalInSeconds:number):Observable<string>  {
     return new Observable <string> ((observer)=>{
      // observer.next();
      // observer.error();
       // observer.complete();
       let counter=0;
      let adsTimer=setInterval(()=>{
        console.log('in Interval')
        if (counter==this.adsList.length) {
          observer.complete();
        }
        if (this.adsList[counter]=="") {
          observer.error("Error:Empty Ad.");
        }
      observer.next(this.adsList[counter])
      counter++;
      },intervalInSeconds*1000);
      return{
        unsubscribe() {
          clearInterval (adsTimer);
          console.log("In Obs unsubscribe...")

        }
      }
    });

  }
  getSerialAds():Observable<string> {
    return from(this.adsList)
  }
}
