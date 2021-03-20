
/* Angular dependencies (auto installed) */

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* Components imports */

import { ChartsComponent } from './components/charts/charts.component';

import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({

  declarations: [

    AppComponent,
    ChartsComponent,
    NavbarComponent

  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
