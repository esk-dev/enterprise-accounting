import { createReducer, on } from '@ngrx/store';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import {
  LoadEnterpisesAction,
  CreateMainEnterpiseAction,
  UpdateMainEnterpiseAction,
  CreateSubEnterpiseAction,
  UpdateSubEnterpiseAction,
} from '../actions/enterprise.action';
import { EnterprisesState, initalEnterprisesState } from './../state/app.state';

export const enterpriseReducer = createReducer(
  initalEnterprisesState,
  on(
    LoadEnterpisesAction,
    (state, { payload }): EnterprisesState => ({
      ...payload,
    }),
  ),

  on(CreateMainEnterpiseAction, (state, { newMainEnterprise }): EnterprisesState => {
    const newState = { ...state };
    newState.mainEnterprises = [{ ...newMainEnterprise }];
    return newState;
  }),

  on(UpdateMainEnterpiseAction, (state, { updatedMainEnterprise }): EnterprisesState => {
    const newState = { ...state };
    const enterprise = newState.mainEnterprises.filter(
      (el: IMainEnterprise) => el._id !== updatedMainEnterprise._id,
    );
    enterprise.push(updatedMainEnterprise);
    newState.mainEnterprises = enterprise;
    return newState;
  }),

  on(CreateSubEnterpiseAction, (state, { newSubEnterprise }): EnterprisesState => {
    const newState = { ...state };
    newState.subEnterprises = [{ ...newSubEnterprise }];
    return newState;
  }),

  on(UpdateSubEnterpiseAction, (state, { updatedSubEnterprise }): EnterprisesState => {
    const newState = { ...state };
    const enterprise = newState.subEnterprises.filter(
      (el: ISubEnterprise) => el._id !== updatedSubEnterprise._id,
    );
    enterprise.push(updatedSubEnterprise);
    newState.subEnterprises = enterprise;
    return newState;
  }),
);
