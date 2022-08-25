import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Gif, Gifs } from '../interfaces/gifs.interfaces';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-ver-gifs',
  templateUrl: './ver-gifs.component.html',
  styles: [
  ]
})
export class VerGifsComponent implements OnInit {

  gif: Gif[] = []

  constructor(private activatedRoute: ActivatedRoute, private gifsService: GifsService) { }

  ngOnInit(): void {

    /* this.activatedRoute.params.subscribe(({id})=>{
      this.gifsService.buscarGifId(id)
      console.log(this.gif)
    }) */

    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.gifsService.buscarGifId(id)),
      tap(console.log)
    ).subscribe((gif: Gifs) => {
      this.gif = gif.data;
      console.log(this.gif);
    })

  }

}
