import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs';
import { login } from '../actions/auth.action';
import { setAuth, setUser } from '../actions/user.action';
import { AuthService } from './../../_services/auth.service';
@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      mergeMap(({ email, password }) => {
        return this.authService.login(email, password).pipe(
          map((user) => setUser({ user }), setAuth({ isAuth: true })),
          tap((user) => {
            console.log(user);
            this.router.navigateByUrl('./view');
          })
        );
      })
    );
  });
}
