import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../class/articles/article';
import { Categorie } from '../class/categories/categorie';
import { ArticlesService } from '../services/articles/articles.service';
import { CategoriesService } from '../services/categories/categories.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categorie-details',
  templateUrl: './categorie-details.page.html',
  styleUrls: ['./categorie-details.page.scss'],
})
export class CategorieDetailsPage implements OnInit {
  id_categorie : number;
  private sub: any;
  listArticles : Array<Article> = new Array<Article>();
  categorie: Categorie = {} as Categorie;

  constructor(
    private serviceA : ArticlesService,
    private serviceC : CategoriesService,
    private route: ActivatedRoute
    ) { }

  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id_categorie = + params['id']; // (+) converts string 'id' to a number
   });
    if(this.id_categorie != null) {
      this.listArticles = await this.serviceA.getAllArticlesByCategorieId(this.id_categorie);
      this.categorie = await this.serviceC.getCategorieById(this.id_categorie);
      console.log( "this.categorie : " + this.categorie);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
