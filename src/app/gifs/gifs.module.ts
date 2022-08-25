import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagesComponent } from './gifs-pages/gifs-pages.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { CardGifsComponent } from './card-gifs/card-gifs.component';
import { VerGifsComponent } from './ver-gifs/ver-gifs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GifsPagesComponent,
    BuscadorComponent,
    CardGifsComponent,
    VerGifsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    GifsPagesComponent,
    VerGifsComponent
  ],
  providers: [
    
  ]
})
export class GifsModule { }
