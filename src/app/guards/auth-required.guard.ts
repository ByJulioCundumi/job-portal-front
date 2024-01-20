import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userStateSelector } from '../state/userState/user.selector';
import { IUserDTO } from '../models/IUser';

export const authRequiredGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const store = inject(Store)

  store.select(userStateSelector).subscribe((user:IUserDTO)=>{
    if(!user.id){
      router.navigate(["/auth"])
    }
    else if(!(user.role === "company" && user.id)){
      router.navigate(["/"])
    }
  })

  return true;
};
