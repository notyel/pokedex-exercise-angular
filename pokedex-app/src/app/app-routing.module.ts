import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexPageComponent } from './pokedex/pages/pokedex-page/pokedex-page.component';

const routes: Routes = [ // TODO: router-outlet (Padre)
  {
    path: '',
    component: PokedexPageComponent,
    loadChildren: () => import(`./pokedex/pokedex.module`).then(m => m.PokedexModule),
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
