import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/class/personnes/client';
import { environment } from 'src/environments/environment';

@Injectable()

export class ClientsService {

  constructor(private http: HttpClient) {}

  url : string = "http://localhost:5000";

  readAPI(URL: string) {
    return this.http.get(URL);
  }

  getClientById(id) {
    return new Promise ((resolve, reject) => { 
      let url = environment.apiUrl + '/clients/' + id;
      this.readAPI(url)
        .subscribe((data) => {
        console.log(data);
        let client : Client = new Client( data['nom'], data['prenom'], data['adresse'], data['tel'], data['email'], data['ville'], data['arrondissement'], data['clientId']);
        resolve(client);
        return client;
      });
    });
  }
  getAllClient() : Promise<Array<Client>> {
    return new Promise ((resolve, reject) => {  
      let listClients : Array<Client> = new Array<Client>();
      let url = environment.apiUrl + '/clients';
      this.readAPI(url)
        .subscribe((data : Array<Client> ) => {
        console.log(data);
        
        data.forEach( client => {
          let tmpClient : Client = new Client( client['nom'], client['prenom'], client['adresse'], client['tel'], client['email'], client['ville'], client['arrondissement'], client['clientId']);
          listClients.push(tmpClient);
        });
        resolve(listClients);
        return listClients;
      });
    });
  }

}
