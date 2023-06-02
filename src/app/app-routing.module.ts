import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { IniciarSessioRecuBlancoComponent } from "./isessioBlanco/iniciar-sessio-recu-blanco/iniciar-sessio-recu-blanco.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },{
  path: 'sessio',
  component: IniciarSessioRecuBlancoComponent
},
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
