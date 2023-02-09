// export * from './enterprise.reducer';
// export * from './user.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { enterpriseReducer } from './enterprise.reducer';
import { userReducer } from './user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  enterprises: enterpriseReducer,
  user: userReducer,
};
