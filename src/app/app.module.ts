
/* Angular dependencies (auto installed) */

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular material */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './module/angular-material.module';



/* Components imports */

import { ChartsComponent } from './components/charts/charts.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartListComponent } from './components/chart-list/chart-list.component';


@NgModule({

  declarations: [

    AppComponent,
    ChartsComponent,
    NavbarComponent,
    ChartComponent,
    ChartListComponent,
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule { }
