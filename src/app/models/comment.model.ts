import {User} from './user.model';

export class Comment {
  private _text: string;
  private _commentator: User;

  constructor(text: string, commentator: User) {
    this._text = text;
    this._commentator = commentator;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get commentator(): User {
    return this._commentator;
  }

  set commentator(value: User) {
    this._commentator = value;
  }
}
