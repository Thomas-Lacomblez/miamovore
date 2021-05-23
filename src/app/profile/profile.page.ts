import { Component, OnInit } from '@angular/core';
import { Client } from '../class/personnes/client';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public connectedUser : Client;
  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {

    this.authService.userData$.subscribe((res :any) => {
      this.connectedUser = res;
    });

  }

}
