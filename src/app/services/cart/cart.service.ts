import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from 'src/app/cart-modal/cart-modal.page';
import { Article } from 'src/app/class/articles/article';
import { AuthConstants } from 'src/app/config/auth-constant';
import { AlertService } from '../alert/alert.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = Array<Article>();
  private cartArticleCount = new BehaviorSubject(0);

  constructor(private storageService : StorageService) { }

  async addToCart(article: Article) {

    let added : boolean = false;
    
    this.storageService.get(AuthConstants.CART).then( (data : Array<Article>) => {
      console.log("data : " + data );
      if( data === null || data.length === 0 ) {
        data = new Array<Article>();
        console.log("Dans if data === null");
        data.push(article);
      }
      else {
        if(!added) {
          console.log("Dans !added");
          data.push(article);
        }
        else {
          console.log("Dans else");
          console.log("data : " + data );
          console.log( "JSON.stringify(data) : "  + JSON.stringify(data) );
          data.forEach(article => {
            const element = article;
            if(article.$id === element.$id) {
              element.$quantite += 1;
              element.$prix = element.$prix * element.$quantite;
              added = true;
            }
          });
        }
      }
      console.log("JSON.stringify(data) : "  + JSON.stringify(data) );
      this.storageService.store(AuthConstants.CART, data);
    });
  }

  getCart() {
    return this.storageService.get(AuthConstants.CART);
  }
}
