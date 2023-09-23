import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex.routes';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PokedexPageComponent,
    PokemonListComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    SharedModule
  ]
})
export class PokedexModule { }
