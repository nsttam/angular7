import { Injectable } from '@angular/core';
import {Type} from './models/type.model';
import {Studio} from './models/studio.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  types: Type[]; //??

  constructor() {
    let romance = new Type('Romance');
    let action = new Type('Action');
    let sf = new Type('Science-Fiction');
    let comedy = new Type('Comedy');
    let horror = new Type('Horror');
    this.types = [romance, action, sf, comedy, horror];
  }

  getOne(name: string): Type {
    for (let i = 0; i < this.types.length; ++i) {
      if (name.toLowerCase() === this.types[i].name.toLowerCase()) {
        return this.types[i];
      }
    }
  }

  getAll(): Type[] {
    return this.types;
  }

  save(name : string): void {
    this.types.push(new Type(name));
  }
 





}
