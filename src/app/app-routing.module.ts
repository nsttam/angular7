import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AnimesComponent} from './animes/animes.component';
import {PostComponent} from './post/post.component';
import {AnimeDetailsComponent} from './anime-details/anime-details.component';
import {AddTypeComponent} from './add-type/add-type.component';
import {AddStudioComponent} from './add-studio/add-studio.component';
import {AddAnimeComponent} from './add-anime/add-anime.component';

/*Les routes ne dissimulent rien de particulier. */
const routes: Routes = [ //on ajoute des routes
  {path: '', pathMatch: 'full', redirectTo: 'animes'},//route par default
  {path: 'animes', component: AnimesComponent}, //si je vais sur route anime, ca m'emmene a composant animes
  {path: 'posts', component: PostComponent},
  {path: 'anime-details/:name', component: AnimeDetailsComponent}, //pour chaque nom du anime. A besoin de info del exterieur, necesia saber de que anime estamos hablando
  {path: 'add-type', component: AddTypeComponent},
  {path: 'add-studio', component: AddStudioComponent},
  {path: 'add-anime', component: AddAnimeComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
