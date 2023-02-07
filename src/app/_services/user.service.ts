import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: Subject<User> = new Subject<User>();

  public userData: Subject<User> = user;

  public initUserData(user: User) {
    this.user.next(user);
  }
}