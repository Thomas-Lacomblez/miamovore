import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/class/articles/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  url : string = "http://localhost:5000";


  readAPI(URL: string) {
    return this.http.get(URL);
  }

  getArticleById(id) : Promise<Article> {
    return new Promise ((resolve, reject) => { 
      let url = environment.apiUrl + '/articles/' + id;
      this.readAPI(url)
        .subscribe((data) => {
        console.log(data);
        let client : Article = new Article( data['libelle'], data['prix'], data['quantite'], data['articleDescription'], data['etat'], data['photo'], data['categorieId'], data['clientId'], data['commercantId'], id );
        resolve(client);
        return client;
      });
    });
  }
  getAllArticles() : Promise<Array<Article>> {
    return new Promise ((resolve, reject) => {  
      let listClients : Array<Article> = new Array<Article>();
      let url = environment.apiUrl + '/articles';
      this.readAPI(url)
        .subscribe((data : any ) => {
        console.log(data);
        data.forEach( article => {
          let tmpClient : Article = new Article( article['libelle'], article['prix'], article['quantite'], article['articleDescription'], article['etat'], article['photo'], article['categorieId'], article['clientId'], article['commercantId'], article['articleId']);
          listClients.push(tmpClient);
        });
        resolve(listClients);
        return listClients;
      });
    });
  }

  getAllArticlesByCategorieId(id) : Promise<Array<Article>> {
    return new Promise ((resolve, reject) => {  
      let listClients : Array<Article> = new Array<Article>();
      let url = environment.apiUrl + '/articles/categorieId/' + id;
      this.readAPI(url)
        .subscribe((data : any ) => {
        console.log(data);
        data.forEach( article => {
          let tmpClient : Article = new Article( article['libelle'], article['prix'], article['quantite'], article['articleDescription'], article['etat'], article['photo'], article['categorieId'], article['clientId'], article['commercantId'], article['articleId'] );
          listClients.push(tmpClient);
        });
        resolve(listClients);
        return listClients;
      });
    });
  }

}
