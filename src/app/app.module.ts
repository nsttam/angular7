import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimesComponent } from './animes/animes.component';
import { AnimeComponent } from './anime/anime.component';
import {AppRoutingModule} from './app-routing.module';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddTypeComponent } from './add-type/add-type.component';
import { AddStudioComponent } from './add-studio/add-studio.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimesComponent,
    AnimeComponent,
    PostComponent,
    PostsComponent,
    AnimeDetailsComponent,
    AddTypeComponent,
    AddStudioComponent,
    AddAnimeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
