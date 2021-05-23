import { Component, OnInit } from '@angular/core';
import { Article } from '../class/articles/article';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {
  cart : Array<Article>;
  constructor(private cartService : CartService ) { }

  async ngOnInit() {
    this.cart = await this.cartService.getCart();
    console.log( "JSON.stringify(data) : "  + JSON.stringify(this.cart) );
    console.log("this.cart.length : "  + this.cart.length);
  }

}
