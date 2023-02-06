import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, map } from 'rxjs';
import { User } from './../models/user';
const Users: User[] = [
  {
    email: 'q@gmail.com',
    password: '12345678',
    role: 'worker',
  },
];
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private UserDB: Observable<User[]> = of(Users);

  public authState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public isAuthenticated: Observable<boolean> = this.authState;

  public login(email: string, password: string): Observable<User> {
    return this.findUser(email).pipe(
      map((userData: User) => {
        if (this.validatePassword(userData.password, password)) {
          return userData;
        } else {
          throw new Error(`Incorrect pass`);
        }
      }),
    );
  }

  public logout(): void {
    this.authState.next(false);
  }

  private findUser(email: string): Observable<User> {
    return this.UserDB.pipe(
      map((users) => {
        const user: User = Object.assign(users.filter((el) => el.email === email));
        if (user) {
          return user;
        } else {
          throw new Error(`User dosen't exist`);
        }
      }),
    );
  }

  private validatePassword(passwordInDb: string, inputPassword: string): boolean {
    const isValid: boolean = passwordInDb == inputPassword ? true : false;
    return isValid;
  }
}
