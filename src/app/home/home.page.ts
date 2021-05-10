import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategorieDetailsPage } from '../categorie-details/categorie-details.page';
import { Categorie } from '../class/categories/categorie';
import { DataService } from '../data.service';
import { ArticlesService } from '../services/articles/articles.service';
import { CategoriesService } from '../services/categories/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories: Array<Categorie> = new Array<Categorie>();
  public featuredProducts = [];
  public bestSellProducts = [];

  constructor(
    private serviceC: CategoriesService,
    private data: DataService,
    private modalController : ModalController
  ) { }

  async ngOnInit() {
    this.categories = await this.serviceC.getAllCategories();
    /*
    this.categories = this.data.getCategories(); */
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();
   
  }

  /*async openCategorie(id) {
    console.log( " openCategorie(id) : " + id );
    const modal = await this.modalController.create({
      component: CategorieDetailsPage,
      componentProps : {
        id_categorie : id
      }
    });
    return await modal.present();/
  }*/
}
