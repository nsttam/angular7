export class User {
  private _login: string;
  private _password: string;
  private _role: string;

  constructor(login: string, password: string, role: string) {
    this._login = login;
    this._password = password;
    this._role = role;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
