
import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart/chart.service';

@Component({

  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})

export class FavoritosComponent implements OnInit {

  results: any;

  constructor( private chartService: ChartService) { }

  ngOnInit(): void {

    this.chartService.listarFavorito().subscribe(response => {

      typeof(response);
      this.results = response;
    });
  };

}
