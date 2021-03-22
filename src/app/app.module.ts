
/* Angular dependencies (auto installed) */

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular material */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Components imports */

import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartListComponent } from './components/chart-list/chart-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';


@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    ChartComponent,
    ChartListComponent,
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule
  ],

  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule { }
