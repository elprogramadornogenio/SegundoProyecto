import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gif, Gifs } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private llave: string = 'MLnYOq7AydwLuRURF69reVfQ2zOi6Jjq';
  //api.giphy.com/v1/gifs
  private url: string = 'https://api.giphy.com/v1/gifs';

  private gif: Gif[] = [];

  private gifUnique: Gif[] = [];

  private historial: string[] = [];

  constructor(private http: HttpClient) { 
    this.gif = JSON.parse(localStorage.getItem('resultados')!) || [];
    this.historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }

  get gifId() {
    return this.gifUnique;
  }

  get listaGifs() {
    return this.gif;
  }

  get historialBusqueda() {
    return this.historial;
  }

  buscarGifs(busqueda: string) {
    const params = new HttpParams()
    .set('api_key', this.llave)
    .set('limit', '12')
    .set('q', busqueda);

    this.http.get<Gifs>(`${this.url}/search`, {params: params})
    .subscribe((resp: Gifs)=>{
      this.agregarHistorial(busqueda);
      this.gif = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.gif));
      //console.log(resp);
    }, (err) => {
      console.log(err);
    })
  }

  agregarHistorial(busqueda: string){
    if(this.historial.includes(busqueda)){
      this.historial = this.historial.filter(item => item !== busqueda);
      this.historial.unshift(busqueda);
    } else {
      this.historial.unshift(busqueda);
    }
    this.historial = this.historial.splice(0,10);
    localStorage.setItem('historial', JSON.stringify(this.historial));
  }

  buscarGifId(id: string): Observable<Gifs> {
    const params = new HttpParams()
    .set('api_key', this.llave)
    .set('ids', id);

    return this.http.get<Gifs>(`${this.url}`, {params: params});

  }


}
