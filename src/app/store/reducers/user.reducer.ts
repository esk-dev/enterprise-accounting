import { createReducer, on } from '@ngrx/store';
import { setAuth, setUser } from './../actions/user.action';
import { UserState, initalUserState } from './../index';
export const userReducer = createReducer(
  initalUserState,
  on(setAuth, (state, { isAuth }): UserState => ({ ...state, isAuth })),
  on(setUser, (state, { user }): UserState => ({ ...state, user })),
);
