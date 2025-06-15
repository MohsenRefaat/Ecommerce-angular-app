import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedSubject:BehaviorSubject<boolean>
  // isUserLoggedIn(): boolean {
  //   if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
  //     return localStorage.getItem('userLogged') === 'true'; 
  //   }
  //   return false;
  // }

  constructor() { 
    this.isLoggedSubject=new BehaviorSubject<boolean> (false);
  }
   private hasToken(): boolean {
    return typeof window !== 'undefined' && !!localStorage.getItem('token');
  }

  isUserLoggedIn(): boolean {
    return this.hasToken();
  }

  login(userName: string, password: string) {
    if (typeof window !== 'undefined') {
      const usrToken = '123456789';
      localStorage.setItem("token", usrToken);
      this.isLoggedSubject.next(true);
    }
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("token");
      this.isLoggedSubject.next(false);
    }
  }
   get isUserLogged(): boolean {
    return this.hasToken();
  }

  getLoggedStatus() {
    return this.isLoggedSubject.asObservable();
  }
}
