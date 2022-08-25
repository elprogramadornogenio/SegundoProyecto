import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-card-gifs',
  templateUrl: './card-gifs.component.html',
  styles: [
  ]
})
export class CardGifsComponent {

  constructor(private gifsService: GifsService) { }

  get resultados() {
    return this.gifsService.listaGifs;
  }

}
