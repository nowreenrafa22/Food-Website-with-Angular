import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoginState!:boolean;
  userName!:string;

  constructor() {
    // this.userLoginState=false;
  }

  firstLogin(user: string){
    this.userName=user
  }

  isUserLoggedIn(){
    let userNameStorage=localStorage['user'];
    if(userNameStorage)
      return true;
    return false
  }
}

