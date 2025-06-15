import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-user-login',
  imports: [],
  standalone:true,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent implements OnInit {
  isUserLogged:boolean=false;
  constructor(private authService:UserAuthService) {

  }
  ngOnInit(): void {
  this.isUserLogged=this.authService.isUserLogged;
  }
  login() {
    this.authService.login('userName','password');
    this.isUserLogged=this.authService.isUserLogged;
  }
  logout () {
  this.authService.logout();
  this.isUserLogged=this.authService.isUserLogged;
  }

}
