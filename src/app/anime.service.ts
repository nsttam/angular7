import { Injectable } from '@angular/core';
import {Anime} from './models/anime.model';
import {StudioService} from './studio.service';
import {TypeService} from './type.service';
import {Type} from './models/type.model';
import {Studio} from './models/studio.model';

@Injectable({ //decore class AnimeService
  providedIn: 'root'
})
export class AnimeService {
  animeTab: Anime[]; //variable de class

  constructor(public ss: StudioService, public ts: TypeService) { 
    let onePiece = new Anime('One Piece', 'https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg',
      new Date(1999, 9, 13), //variable local  //date est instancié
      this.ss.getOne('toei animation'),
      [this.ts.getOne('action'), this.ts.getOne('comedy')], 0); //tableau car j'ai plusieurs types

    let naruto = new Anime('Naruto', 'https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png',
      new Date(1999, 9, 13), this.ss.getOne('madhouse'),
      [this.ts.getOne('action'), this.ts.getOne('horror'), this.ts.getOne('romance')], 12);

    let onePunchMan = new Anime('One Punch Man', 'https://m.media-amazon.com/images/M/MV5BMzQxMzE5NzM2NV5BMl5BanBnXkFtZTgwMDQ4NTUyNzE@._V1_.jpg',
      new Date(1999, 9, 13), this.ss.getOne('madhouse'),
      [this.ts.getOne('science-fiction')], 16);

    let tokyoGhoul = new Anime('Tokyo Ghoul', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Tokyo_Ghoul_volume_1_cover.jpg/220px-Tokyo_Ghoul_volume_1_cover.jpg',
      new Date(1999, 9, 13), this.ss.getOne('madhouse'),
      [this.ts.getOne('horror')], 18);


    let loveHina = new Anime('Love Hina', 'https://images-na.ssl-images-amazon.com/images/I/51X93tCBb8L.jpg',
      new Date(1999, 9, 13), this.ss.getOne('madhouse'),
      [this.ts.getOne('romance')], 10);


    this.animeTab = [onePiece, naruto, onePunchMan, tokyoGhoul, loveHina]; //je mets tout à l'interieur du tableau
  }
//methode pour retourner tous les animes. Lo puedo escribir al array como Anime []
  getAll(): Array<Anime> {
    return this.animeTab;
  }
//pour recuperer un anime particulier a partir de son nom. Si no hay anime con ese nombre, undefinied
  getOne(name: string): Anime {
    for (let i = 0; i < this.animeTab.length; ++i) { //j'augment un chaque fois que i<length tab
      if (name.toLowerCase() === this.animeTab[i].name.toLowerCase()) {
        return this.animeTab[i]; //derniere execution de une methode
      }
    }
  }

  // Je liste ici tous les attributs nécessaire à la création d'un animé a partir de la utilisaion de methode save
  save(name: string, img: string, date: Date, studio: Studio, types: Type[], ageLimit: 0 | 10 | 12 | 16 | 18) {
    this.animeTab.push(new Anime(name, img, date, studio, types, ageLimit));
  }

  delete(name: string){ //para borrar un anime a traves de su nombre
    this.animeTab.splice(this.animeTab.indexOf(this.getOne(name)), 1); //deleteCount:1 para que no me borre todos los animes que siguen al que quiero borrar
  }
}
