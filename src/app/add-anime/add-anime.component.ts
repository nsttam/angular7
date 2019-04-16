import {Component, OnInit} from '@angular/core';
import {Studio} from '../models/studio.model';
import {Type} from '../models/type.model';
import {DateFormatter} from '@angular/common/src/pipes/deprecated/intl';
import {AnimeService} from '../anime.service';
import {StudioService} from '../studio.service';
import {TypeService} from '../type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css']
})
export class AddAnimeComponent implements OnInit {

  // Je créé une variable de classe pour chaque attribut de ma classe image,
  // afin d'y stocker les valeurs de mon formulaire.
  name: string; // Pour le nom de l'anime que je vais construire.
  img: string; // Pour l'image de l'anime que je vais construire.
  date: string = '2019-02-01'; // Pour la date je dois utiliser une chaine de caractère sous le format yyyy-MM-dd
  studios: Studio[]; // pour afficher tous les studios, j'ai besoin d'un tableau les contenant
  studio: Studio; // Pour le studio de l'anime que je vais construire.
  types: Type[]; // pour afficher mes options, j'ai besoin d'un tableau de types
  type: Type; // Pour lier un type à mon select dans l'html. Pour le moment, mon anime ne pourra avoir qu'un seul type.
  ages = [0, 10, 12, 16, 18]; // Pour créer dynamiquement mon select
  ageLimit: 0 | 10 | 12 | 16 | 18; // Pour l'âge limite de l'animé

  constructor(public as: AnimeService, public ss: StudioService, public ts: TypeService, public router: Router) {
  }

  ngOnInit() {
    // Je récupère toutes les données nécessaires grâce à mes services
    this.types = this.ts.getAll();
    this.studios = this.ss.getAll();
  }

  save() {
    // J'appelle la méthode de l'anime service pour le sauvegarder.
    // Si l'image n'est pas renseignée, je la remplace par une image par défaut
    if (!this.img){
      this.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8hxPD0y2AIo2NwKcrr0V3RiX7YomhNggm2fPhN6dgIY2Jjel'
    }
    this.as.save(this.name, this.img, new Date(this.date), this.studio, [this.type], this.ageLimit);
    // Une fois sauvegardé, je navigue vers l'animé ainsi créé
    this.router.navigate(['anime-details', this.name])
  }


}
