import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimeService} from '../anime.service';
import {Anime} from '../models/anime.model';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
  anime: Anime; // Anime pour utiliser dans l'ensemble de mon application (lo llamo con this luego)

  constructor(public ac: ActivatedRoute,
              public as: AnimeService) { }

  ngOnInit() {
    const name = this.ac.snapshot.paramMap.get('name');//je recupere anime a partir de son nom
    this.anime = this.as.getOne(name);
  }

}
