import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: Subject<User> = new Subject<User>();

  public userData: Subject<User> = this.user;

  public initUserData(user: User) {
    this.user.next(user);
  }
}
