import {Studio} from './studio.model';
import {Type} from './type.model';

export class Anime {
  private _name: string;
  private _img: string;
  private _date: Date; //utilisara class Data
  private _studio: Studio;
  private _types: Type[]; 
  private _ageLimit: 0 | 10 | 12 | 16 | 18;

  constructor(name: string, img: string, date: Date, studio: Studio, types: Type[], ageLimit: 0 | 10 | 12 | 16 | 18) {
    //studio et types lo vamos a meter como parte de service 
    this._name = name;
    this._img = img;
    this._date = date;
    this._studio = studio;
    this._types = types;
    this._ageLimit = ageLimit;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get studio(): Studio {
    return this._studio;
  }

  set studio(value: Studio) {
    this._studio = value;
  }

  get types(): Type[] {
    return this._types;
  }

  set types(value: Type[]) {
    this._types = value;
  }

  get ageLimit(): 0 | 10 | 12 | 16 | 18 {
    return this._ageLimit;
  }

  set ageLimit(value: 0 | 10 | 12 | 16 | 18) {
    this._ageLimit = value;
  }
}
