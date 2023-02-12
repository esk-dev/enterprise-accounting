import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/models/user';

export const setUser = createAction('[User] Set User', props<{ user: IUser; isAuth: boolean }>());
