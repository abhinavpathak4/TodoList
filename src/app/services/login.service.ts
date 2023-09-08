import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn : boolean = true;
  constructor() { }

  public getLoginStatus(){
    return this.loggedIn;
  }
}
