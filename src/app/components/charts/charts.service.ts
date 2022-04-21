import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class ChartsService {
  urlToJson = 'assets/stocked.json';
  result: any;

  constructor(
    public http: HttpClient
  ) { }

  listarArquivo() {
    return this.http.get<any>(this.urlToJson);
  }

  favoritarChart() {
    return this.http.get<any>(this.urlToJson);
  }
}
