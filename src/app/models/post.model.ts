import {User} from './user.model';
import {Comment} from './comment.model';

export class Post {
  private _title: string;
  private _text: string;
  private _releasedDate: Date;
  private _ratings: number;
  private _redactor: User;
  private _comments: Array<Comment>;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get releasedDate(): Date {
    return this._releasedDate;
  }

  set releasedDate(value: Date) {
    this._releasedDate = value;
  }

  get ratings(): number {
    return this._ratings;
  }

  set ratings(value: number) {
    this._ratings = value;
  }

  get redactor(): User {
    return this._redactor;
  }

  set redactor(value: User) {
    this._redactor = value;
  }

  get comments(): Array<Comment> {
    return this._comments;
  }

  set comments(value: Array<Comment>) {
    this._comments = value;
  }
}
