
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ChartService {

  urlToJson = 'assets/stocked.json';
  storage= [];
  result: any;

  constructor(
    public http: HttpClient
  ) {}

  listarArquivo() {
    
    return this.http.get<any>(this.urlToJson);
  };

  listarFavorito() {

    return this.http.get<any>(this.urlToJson);
  }

}
