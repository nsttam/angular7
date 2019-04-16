import {Component, OnInit} from '@angular/core';
import {Studio} from '../models/studio.model';
import {Type} from '../models/type.model';
import {Anime} from '../models/anime.model';
import {AnimeService} from '../anime.service';
import {TypeService} from '../type.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  animeTab: Array<Anime>; //je declare tableaux pour acceder au ensemble de composant, html inclus. No queda como local
  typeTab: Type[];
  searchByName: string;
  searchByType: Type;

  constructor(public as: AnimeService, public ts: TypeService) {//j'appele les services avec inyection de dependence
  }

  ngOnInit() { //lo que se lanza desde el principio
    this.animeTab = this.as.getAll();    //Prends methode getAll de service pour obtenir tous les animes
    this.typeTab = this.ts.getAll();     //Contenido de tableau typeTab viene de TypeService en type.service.ts
  }

}
