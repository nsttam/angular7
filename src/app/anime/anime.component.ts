import {Component, Input, OnInit} from '@angular/core';
import {Anime} from '../models/anime.model';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  @Input() anime: Anime; //input gere par composant parent: animesComposant

  constructor() {
  }

  ngOnInit() {
  }

}
