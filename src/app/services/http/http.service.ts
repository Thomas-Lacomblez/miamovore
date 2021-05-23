import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/class/personnes/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  post(serviceName: string, data: any) {
    const headers = new HttpHeaders();
    const options = { header: headers, withCredentials : false};
    const url = environment.apiUrl + serviceName;

    console.log("JSON.stringify(data) : "  + JSON.stringify(data) );
    
    return this.http.post(url, data, options);
  }
}
