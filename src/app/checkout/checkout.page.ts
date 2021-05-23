import { Component, OnInit } from '@angular/core';
import { Article } from '../class/articles/article';
import { Client } from '../class/personnes/client';
import { AuthService } from '../services/auth/auth.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  cart : Array<Article>;
  public connectedUser : Client;
  constructor(private cartService : CartService, private authService : AuthService) { }

  async ngOnInit() {
    this.cart = await this.cartService.getCart();
    this.authService.userData$.subscribe( (res :any) => {
      console.log("res : " + res);
      console.log("JSON.stringify(res) : " + JSON.stringify(res) );
      this.connectedUser = res;
    });
    console.log( "JSON.stringify(data) : "  + JSON.stringify(this.cart) );
    console.log("this.cart.length : "  + this.cart.length);
  }


}
