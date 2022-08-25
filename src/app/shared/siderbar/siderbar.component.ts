import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: [
  ]
})
export class SiderbarComponent {

  constructor(private gifsService: GifsService) { }

  get historial () {
    return this.gifsService.historialBusqueda;
  }

  buscar(item: string) {
    this.gifsService.buscarGifs(item);
  }

  

}
