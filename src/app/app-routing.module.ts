import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsPagesComponent } from './gifs/gifs-pages/gifs-pages.component';
import { VerGifsComponent } from './gifs/ver-gifs/ver-gifs.component';

const routes: Routes = [
    {
        path: '',
        component: GifsPagesComponent,
        pathMatch: 'full'
    },
    {
        path: 'gifs/:id',
        component: VerGifsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)

        ],
        exports: [
            RouterModule
        ]
    }
)
export class AppRoutingModule {

}