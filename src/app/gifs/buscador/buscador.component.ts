import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent {

  //txtBuscar: string = "Buscar";
  @ViewChild('busqueda') busqueda!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {
  }

  buscar() {
    /* console.log(this.txtBuscar);
    this.txtBuscar = ""; */
    const valor: string = this.busqueda.nativeElement.value.trim().toLocaleLowerCase();
    
    if(valor.length===0){
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.busqueda.nativeElement.value = '';

    

  }

}
