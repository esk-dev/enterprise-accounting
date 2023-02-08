import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './../state/app.state';

export const userFeature = createFeatureSelector<UserState>('user');

export const selectUserData = createSelector(
  userFeature,
  (state) => state.user
);

export const selectIsAuth = createSelector(
  userFeature,
  (state) => state.isAuth
);

export const selectRole = createSelector(
  selectUserData,
  (userData) => userData?.role ?? null
);
// export const selectHasRole = (role: string) =>
//   createSelector(selectRoles, (roles) => roles.includes(role));
