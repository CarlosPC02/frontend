import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  url = apiServer.url
  
  
  
  constructor(private http: HttpClient) { }

  //crear formulario
  postMethod(url: any, body: any): Observable<any>{
     return this.http.post(`${this.url}${url}`, body);

  }

  
  getMethod(url: any): Observable<any>{
    return this.http.get(`${this.url}${url}`);
  }

}
