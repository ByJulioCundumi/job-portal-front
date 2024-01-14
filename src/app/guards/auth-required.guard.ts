import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authRequiredGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  if(!false){
    router.navigate(["/auth"])
  }
  return true;
};
