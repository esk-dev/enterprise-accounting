/* eslint-disable @typescript-eslint/no-unused-vars */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnterprisesState, initalEnterprisesState } from './../state/app.state';
import { MainEnterprise } from './../../models/main-enterprise';
import { SubEnterprise } from './../../models/sub-enterprise';

export const selectEnterprises =
  createFeatureSelector<EnterprisesState>('enterprises');

export const selectAllEnterprises = createSelector(
  selectEnterprises,
  (state: EnterprisesState) => state
);

export const selectMainEnterprises = createSelector(
  selectEnterprises,
  (state: EnterprisesState) => state.mainEnterprises
);

export const selectSubEnterprises = createSelector(
  selectEnterprises,
  (state: EnterprisesState) => state.subEnterprises
);

export const selectMainEnterprisesById = (mainEnterpriseId: number) =>
  createSelector(selectMainEnterprises, (mainEnterprises: MainEnterprise[]) => {
    const mainEnterpriseById = mainEnterprises.filter(
      (el) => el._id === mainEnterpriseId
    );
    if (mainEnterpriseById.length === 0) {
      return null;
    } else {
      return mainEnterpriseById[0];
    }
  });
