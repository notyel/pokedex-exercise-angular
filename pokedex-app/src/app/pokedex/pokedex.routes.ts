import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokedex',
    loadChildren: () => import('./pokedex.module').then(m => m.PokedexModule),
    pathMatch: 'prefix',
    title: "Pokémon | Pokedex",
  },
  {
    path: '**', //TODO 404 cuando no existe la ruta
    redirectTo: '/pokedex'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
