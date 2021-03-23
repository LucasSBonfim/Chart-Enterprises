
import { Component, OnInit, Input } from '@angular/core';

/* Highcharts import */

import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { ChartService } from './chart.service'

declare var require: any ;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  @Input() index = 0;

  @Input() stock= '';

  @Input() exchange= '';

  @Input() titulo='';

  @Input() country='';

  @Input() company='';

  @Input() variation='';

  @Input() price= 0;

  @Input() data= [];

  public options: any = {

    chart: {
      type: 'area',
      plotShadow: false,
      zoomType: 'xy'
    },

    credits: {

      enabled: false,
    },

    tooltip: {
      // valueSuffix: 'R$',
      valueDecimals: 2,
      valuePrefix: 'R$'
    },

    title: {

      align: 'center',
      text: ' Teste ',
    },

    xAxis: {

      tickInterval: 1,
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'area',
        data: []
      },
    ],
  };

  constructor( private ChartService: ChartService) { }

  ngOnInit() {

    this.options.title.text = this.stock;
    this.options.series[0].data = this.data;
  };

  chart = new Chart(this.options);


  favoritar( index: number ) {

    this.ChartService.listarArquivo().subscribe(response => {
      typeof(response);

      localStorage.setItem('favoritos', JSON.stringify(response[index]));
    });
  };

}