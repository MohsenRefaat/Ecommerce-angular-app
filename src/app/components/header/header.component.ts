import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PromotionAdsService } from '../../services/promotion-ads.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { UserAuthService } from '../../services/user-auth.service';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/services/cart.service';
@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartCount:number=0
  // @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;
  // elemRef: any;

  // toggleNavbar() {
  //   const navbar = this.navbarCollapse.nativeElement;
  //   navbar.classList.toggle('show');
  // }
   isMenuCollapsed = true;

  isUserLogged: boolean = false;
  // private subscription!:Subscription
  private subscriptions: Subscription[] = [];
  constructor(private promoAds: PromotionAdsService
    , private authService: UserAuthService
    , private el: ElementRef
    , private router: Router
    ,private cartService:CartService

  ) {
    

  }

  ngOnInit(): void {
    // this.isUserLogged=this.authService.isUserLogged;
    this.authService.getLoggedStatus().subscribe(status => {
      this.isUserLogged = status;
      this.cartService.cartCount$.subscribe((count: number)=>
        this.cartCount=count
      );
    })
    // let observer= {
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   error:(err:string)=>{
    //     console.log(err);

    //   },
    //   complete:()=>{
    //     console.log("Finished Ads")
    //   }
    // }
    // let adsSubscription= this.promoAds.getSheduledAds(3).subscribe({
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   error:(err:string)=>{
    //     console.log(err);

    //   },
    //   complete:()=>{
    //     console.log("Finished Ads")
    //   }
    //  })
    // //  adsSubscription.unsubscribe();  
    // this.subscriptions.push(adsSubscription)
    let sub = this.promoAds.getSerialAds().subscribe(ad => {
      console.log(ad);
    });
    this.subscriptions.push(sub);
  }
  ngOnDestroy(): void {
    //  this.subscription.unsubscribe();
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe
    }
  }
  //  @HostListener('mouseover') OnMouseOver() {
  //      this.elemRef.nativeElement.toggleNavbar
  //    }
  //    @HostListener('mouseout') OnMouseOut() {
  //      this.elemRef.nativeElement.
  //    }

}
