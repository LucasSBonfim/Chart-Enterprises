
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */

import { ChartListComponent } from './components/chart-list/chart-list.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  { path: 'home', component: ChartListComponent},
  { path: 'favoritos', component: FavoritosComponent},

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
