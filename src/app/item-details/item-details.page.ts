import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { Article } from '../class/articles/article';
import { ArticlesService } from '../services/articles/articles.service';
import { CartService } from '../services/cart/cart.service';
import { CategoriesService } from '../services/categories/categories.service';
import { ToastService } from '../services/toast/toast.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;
  id_article : number;
  sub: any;
  currentArticle : Article;
  listPhotos : Array<string>;
  errorMessage : string = "Une erreur est survenue et à empecher l'ajout de l'article au panier. Si le problème contacter nous à l'adresse : sav.miamovore@miamovre.fr";
  constructor(
    private animationCtrl: AnimationController,
    private route: ActivatedRoute,
    private serviceA : ArticlesService,
    private cartService : CartService,
    private router : Router,
    private toastService : ToastService
  ) { }

  async ngOnInit() {
    this.activeVariation = 'size';
    this.sub = this.route.params.subscribe(params => {
      this.id_article = + params['id']; // (+) converts string 'id' to a number
    });

    if(this.id_article != null) {
      this.currentArticle = await this.serviceA.getArticleById(this.id_article);
      console.log( "this.currentArticle : " + this.currentArticle);
    }
  }
  
  addToCart(article : Article ) {
    console.log("Dans addToCart");
    this.cartService.addToCart(article)
      .then(result => {this.router.navigate(["home/my-cart"]); this.toastService.presentToast("Article ajouté avec succès !")})
      .catch(error => this.toastService.presentToast(this.errorMessage));
  }

  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'color') {
      this.animationCtrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
      .fromTo('opacity', '1', '0.2')
      .play();

      this.animationCtrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();
    } else {
      this.animationCtrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();

      this.animationCtrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
      .fromTo('opacity', '1', '0.2')
      .play();
    }
  }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  changeColor(color: number) {
    this.selectedColor = color;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
