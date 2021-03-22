
import { Component, OnInit } from '@angular/core';

import { ChartService } from '../chart/chart.service';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss']
})

export class ChartListComponent implements OnInit {

  results: any;

  constructor( private chartService: ChartService) { }

  ngOnInit(): void {

    this.chartService.listarArquivo().subscribe(response => {

      typeof(response);
      console.log(response)
      this.results = response;
    })

  }

}
