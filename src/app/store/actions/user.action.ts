import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const setUser = createAction('[User] Set User', props<{ user: User }>());

export const setAuth = createAction(
  '[User] Set Auth',
  props<{ isAuth: boolean }>()
);