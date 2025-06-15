import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuthService)
       ,router=inject(Router);  
  if (authService.isUserLogged) {
    return true;
  }
  alert ('You Must Login First...')
  router.navigate(['/Login'])
  return false;  
};



