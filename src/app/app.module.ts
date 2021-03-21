
/* Angular dependencies (auto installed) */

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* Import dependecies before installed */

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';


/* Components imports */

import { ChartsComponent } from './components/charts/charts.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { DarkLightThemeComponent } from './components/dark-light-theme/dark-light-theme.component';


@NgModule({

  declarations: [

    AppComponent,
    ChartsComponent,
    NavbarComponent,
    DarkLightThemeComponent

  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
