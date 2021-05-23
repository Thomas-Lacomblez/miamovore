import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from 'src/app/config/auth-constant';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {
  
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate() : Promise<boolean> {
    return new Promise(resolve => {
      this.storageService
        .get(AuthConstants.AUTH)
        .then(res => {
          console.log("res : " + res)
          if(res) {
            this.router.navigate(['home']);
            resolve(false);
          } else {
            resolve(true);
          }
        })
        .catch(err => {
          resolve(false);
        });
    });
  }
}
