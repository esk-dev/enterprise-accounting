import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { IUser } from './../models/user';
const Users: IUser[] = [
  {
    email: 'admin@gmail.com',
    password: 'admin1234',
    role: 'ROLE_ADMIN',
  },
  {
    email: 'worker@gmail.com',
    password: 'worker1234',
    role: 'ROLE_WORKER',
  },
];
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private UserDB: Observable<IUser[]> = of(Users);

  public login(email: string, password: string): Observable<IUser> {
    return this.findUser(email).pipe(
      map((userData: IUser) => {
        if (!!this.validatePassword(userData.password, password)) {
          return userData;
        } else {
          throw new Error(`Incorrect pass`);
        }
      }),
    );
  }

  private findUser(email: string): Observable<IUser> {
    return this.UserDB.pipe(
      map((users) => {
        const user: IUser[] = users.filter((el) => el.email === email);
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
    const isValid: boolean = passwordInDb === inputPassword ? true : false;
    return isValid;
  }
}
