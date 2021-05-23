import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from 'src/app/class/personnes/client';
import { AuthConstants } from 'src/app/config/auth-constant';
import { HttpService } from '../http/http.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$ = new BehaviorSubject<any>([]);


  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      this.userData$.next(res);
    });
  }

  login(postData: any) : Observable<any> {
    return this.httpService.post('/clients/LoginClient', postData);
  } 

  signup(postData: any) : Observable<any> {
    return this.httpService.post('/clients/LoginClient', postData);
  } 

  logout(){
    this.storageService.clear();
    this.userData$.next('');
    this.router.navigate(['']);
  } 
}
