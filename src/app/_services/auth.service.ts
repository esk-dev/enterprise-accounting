import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { User } from './../models/user';
const Users: User[] = [
  {
    email: 'q@gmail.com',
    password: '12345678',
    role: 'ROLE_ADMIN',
  },
];
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private UserDB: Observable<User[]> = of(Users);

  public login(email: string, password: string): Observable<User> {
    return this.findUser(email).pipe(
      map((userData: User) => {
        if (!!this.validatePassword(userData.password, password)) {
          return userData;
        } else {
          throw new Error(`Incorrect pass`);
        }
      }),
    );
  }

  // public logout(): void {

  // }

  private findUser(email: string): Observable<User> {
    return this.UserDB.pipe(
      map((users) => {
        const user: User[] = users.filter((el) => el.email === email);
        console.log(user);
        if (user[0]) {
          return user[0];
        } else {
          throw new Error(`User dosen't exist`);
        }
      }),
    );
  }

  private validatePassword(passwordInDb: string, inputPassword: string): boolean {
    console.log(passwordInDb, inputPassword);
    const isValid: boolean = passwordInDb == inputPassword ? true : false;
    return isValid;
  }
}
