import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategorieDetailsPage } from '../categorie-details/categorie-details.page';
import { Categorie } from '../class/categories/categorie';
import { Client } from '../class/personnes/client';

import { AuthConstants } from '../config/auth-constant';
import { DataService } from '../data.service';
import { ArticlesService } from '../services/articles/articles.service';
import { AuthService } from '../services/auth/auth.service';
import { CategoriesService } from '../services/categories/categories.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {
  public categories: Array<Categorie> = new Array<Categorie>();
  public featuredProducts = [];
  public bestSellProducts = [];
  public connectedUser : Client;

  constructor(
    private serviceC: CategoriesService,
    private data: DataService,
    private modalController : ModalController,
    private authService : AuthService
  ) { }

  async ngOnInit() {
    this.categories = await this.serviceC.getAllCategories();
    /*
    this.categories = this.data.getCategories(); */
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();
    this.authService.userData$.subscribe((res :any) => {
      this.connectedUser = res;
    });
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
