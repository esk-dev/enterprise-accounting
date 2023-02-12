/* eslint-disable @typescript-eslint/no-unused-vars */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnterprisesState, initalEnterprisesState } from './../state/app.state';
import { IMainEnterprise } from './../../models/main-enterprise';
import { ISubEnterprise } from './../../models/sub-enterprise';

export const selectEnterprises = createFeatureSelector<EnterprisesState>('enterprises');

export const selectAllEnterprises = createSelector(
  selectEnterprises,
  (state: EnterprisesState) => state,
);

export const selectMainEnterprises = createSelector(
  selectEnterprises,
  (state: EnterprisesState) => state.mainEnterprises,
);

export const selectSubEnterprises = createSelector(
  selectEnterprises,
  (state: EnterprisesState) => state.subEnterprises,
);

export const selectEnterpriseById = (id: string | number) =>
  createSelector(selectAllEnterprises, (enterprises: EnterprisesState) => {
    const selectedEnterprise: Array<IMainEnterprise | ISubEnterprise> = [];
    Object.values(enterprises).forEach((arr) => {
      arr.forEach((el: any) => {
        if (el._id === id) {
          selectedEnterprise.push(el);
        }
      });
    });
    return selectedEnterprise.length !== 0 ? selectedEnterprise[0] : null;
  });

// Unused
export const selectMainEnterprisesById = (mainEnterpriseId: string) =>
  createSelector(selectMainEnterprises, (mainEnterprises: IMainEnterprise[]) => {
    const mainEnterpriseById = mainEnterprises.filter((el) => el._id === mainEnterpriseId);
    if (mainEnterpriseById.length === 0) {
      return null;
    } else {
      return mainEnterpriseById[0];
    }
  });

export const selectSubEnterprisesById = (subEnterpriseId: string) =>
  createSelector(selectSubEnterprises, (subEnterprises: ISubEnterprise[]) => {
    const subEnterpriseById = subEnterprises.filter((el) => el._id === subEnterpriseId);
    if (subEnterpriseById.length === 0) {
      return null;
    } else {
      return subEnterpriseById[0];
    }
  });
