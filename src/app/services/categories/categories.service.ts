import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from 'src/app/class/categories/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  url : string = "http://localhost:5000";

  readAPI(URL: string) {
    return this.http.get(URL);
  }

  getCategorieById(id) : Promise<Categorie> {      
    return new Promise ((resolve, reject) => { 
      let url = this.url + '/api/categories/' + id;
      this.readAPI(url)
        .subscribe( (data) => {
          let client : Categorie = new Categorie( data['libelle'],data['photo'], data['nom'], data['description'], id);
          resolve(client);
          return client;
        });
    });
  }
  getAllCategories() : Promise<Array<Categorie>> {
    return new Promise ((resolve, reject) => {  
      let listClients : Array<Categorie> = new Array<Categorie>();
      let url = this.url + '/api/categories/';
      this.readAPI(url)
        .subscribe((data : Array<Categorie> ) => {
        console.log(data);
        data.forEach( categorie => {
          let tmpClient : Categorie = new Categorie( categorie['libelle'], categorie['photo'], categorie['nom'], categorie['description'], categorie['categorieId']);
          listClients.push(tmpClient);
        });
        resolve(listClients);
        return listClients;
      });
    });
  }
}
