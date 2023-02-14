import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import { EnterpriseState } from './../state/app.state';

export const selectEnterprises = createFeatureSelector<Array<EnterpriseState>>('enterprises');

export const selectAllEnterprises = createSelector(
  selectEnterprises,
  (state: Array<EnterpriseState>) => state,
);

export const selectMainEnterprises = createSelector(
  selectEnterprises,
  (state: Array<EnterpriseState>) =>
    state.map((element: EnterpriseState) => element.mainEnterprise),
);

export const selectSubEnterprises = createSelector(
  selectEnterprises,
  (state: Array<EnterpriseState>) =>
    state.map((element: EnterpriseState) => element.subEnterprises).flatMap((v) => v),
);

export const selectMainEnterprisesById = (mainEnterpriseId: string) =>
  createSelector(selectMainEnterprises, (mainEnterprises: IMainEnterprise[]) => {
    const mainEnterpriseById = mainEnterprises.filter((el) => el._id === mainEnterpriseId);
    return mainEnterpriseById ? mainEnterpriseById[0] : null;
  });

export const selectSubEnterprisesById = (subEnterpriseId: string) =>
  createSelector(selectSubEnterprises, (subEnterprises: ISubEnterprise[]) => {
    const subEnterpriseById = subEnterprises.filter((el) => el._id === subEnterpriseId);
    return subEnterpriseById ? subEnterpriseById[0] : null;
  });
