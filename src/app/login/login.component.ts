import { AuthService } from './../auth.service';
import { authGuard } from './../auth.guard';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signupUsers: any[] = [];
  signupObj:any = {
    userName:"",
    email:'',
    password:''
  };
  loginObj:any = {
    userName:"",
    password:''
  };

  static key:'';

  constructor(private router:Router, private auth:AuthService){

  }

  ngOnInit(){
    if(localStorage['user']){
      this.router.navigate(['']);
    }
  }
  onSignUp(){
    if(localStorage[this.signupObj.userName]){
      alert('User Exists');
    }
    else{
      localStorage.setItem(this.signupObj.userName,JSON.stringify(this.signupObj));
      // this.auth.userLoginState=true;
      this.router.navigate(['/home']);
      alert('User Created');
    }
  }

  onLogin(){
    if(localStorage.getItem(this.loginObj.userName)){
      const localData = JSON.parse(localStorage[this.loginObj.userName]);
      if(localData.password===this.loginObj.password){
        // alert('Successful Login');
        // this.auth.userLoginState=true;
        LoginComponent.key=localData.userName;
        // this.auth.firstLogin(this.loginObj.userName);
        localStorage.setItem('user',this.loginObj.userName);
        this.router.navigate(['/home']);
      }
      else{
        alert('Wrong Password');
      }
    }
    else{
      alert('User Doesn\'t Exist');
    }
  }

  get key(){
    return this.loginObj.userName
  }

}