import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex.routes';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
  declarations: [
    PokedexComponent,
    PokedexPageComponent,
    PokemonListComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
