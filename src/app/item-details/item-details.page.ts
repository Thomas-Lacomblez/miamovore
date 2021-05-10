import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { Article } from '../class/articles/article';
import { ArticlesService } from '../services/articles/articles.service';
import { CategoriesService } from '../services/categories/categories.service';

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
  constructor(
    private animatioCntrl: AnimationController,
    private route: ActivatedRoute,
    private serviceA : ArticlesService,
    private serviceC : CategoriesService,
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
  

  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'color') {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
      .fromTo('opacity', '1', '0.2')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.colors'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();
    } else {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.sizes'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();

      this.animatioCntrl.create()
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
