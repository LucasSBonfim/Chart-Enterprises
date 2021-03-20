
/* Angular dependencies (auto installed) */

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


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
    AppRoutingModule

  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
