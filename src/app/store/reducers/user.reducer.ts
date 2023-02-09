import { createReducer, on } from '@ngrx/store';
import { setUser } from './../actions/user.action';
import { UserState, initalUserState } from './../state/app.state';

export const userReducer = createReducer(
  initalUserState,
  on(setUser, (state, { user, isAuth }): UserState => ({ ...state, user, isAuth })),
);
