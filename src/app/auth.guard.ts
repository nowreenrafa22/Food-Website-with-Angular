import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (route, state) => {

  const auth=inject(AuthService)
  const routee=inject(Router)
  let temp= auth.isUserLoggedIn();
  if(!temp){
    routee.navigate(['/login']);
  }
  return temp
};
