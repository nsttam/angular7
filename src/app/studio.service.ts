import {Injectable} from '@angular/core';
import {Studio} from './models/studio.model';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  studios: Studio[];

  constructor() {
    let toei = new Studio('Toei Animation');
    let madhouse = new Studio('Madhouse');
    this.studios = [toei, madhouse];
  }

  getAll(): Studio[] {
    return this.studios;
  }

  getOne(name: string): Studio {
    for (let i = 0; i < this.studios.length; ++i) {
      if (name.toLowerCase() === this.studios[i].name.toLowerCase()) {
        return this.studios[i];
      }
    }
  }

  save(name: string): void {
    this.studios.push(new Studio(name));
  }
}
