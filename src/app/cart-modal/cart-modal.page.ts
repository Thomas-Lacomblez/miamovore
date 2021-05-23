import { Component, OnInit } from '@angular/core';
import { Article } from '../class/articles/article';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  cart : Array<Article> = new Array<Article>();
  constructor( private cartService : CartService) { }

  ngOnInit() {
  }

}
