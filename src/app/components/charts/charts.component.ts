
import { Component, OnInit } from '@angular/core';

/* All Highcharts imports */

import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({

  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit {
  
  public options: any = {

    "chart": {

      "type": "area"
    },

    "title": {

      "text": "Chart Example"
    },

    "subtitle": {

      "text": "example"
    },

    "series": [{
      "data": [
        
        [
          22.39,
        ],

        [
          22.42,
        ],

        [
          22.36,
        ],

        [
          22.36,
        ],

        [
          22.47,
        ],

        [
          22.39,
        ],

        [
          22.4,
        ],

        [
          22.4,
        ],
        
        [
          22.37,
        ],

        [
          22.37,
        ],

        [
          22.38,
        ],

        [
          22.42,
        ],

        [
          22.37,
        ],

        [
          22.47,
        ],
      
        [
          22.46,
        ],
        
        [
          22.47,
        ],
        
        [
          22.51,
        ],

        [
          23.51
        ],
      ]
    }]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
