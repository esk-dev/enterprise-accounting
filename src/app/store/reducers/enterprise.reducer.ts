import { createReducer, on } from '@ngrx/store';
import { SubEnterprise } from 'src/app/models/sub-enterprise';
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
    newState.mainEnterprises.unshift(newMainEnterprise);
    return newState;
  }),
  on(UpdateMainEnterpiseAction, (state, { updatedMainEnterprise }): EnterprisesState => {
    const newState = { ...state };
    newState.mainEnterprises.filter((el) => el.INN !== updatedMainEnterprise.INN);
    newState.mainEnterprises.unshift(updatedMainEnterprise);
    return newState;
  }),
  on(CreateSubEnterpiseAction, (state, { newSubEnterprise }): EnterprisesState => {
    const newState = { ...state };
    newState.subEnterprises.unshift(newSubEnterprise);
    return newState;
  }),
  on(UpdateSubEnterpiseAction, (state, { updatedSubEnterprise }): EnterprisesState => {
    const newState = { ...state };
    newState.subEnterprises.filter((el: SubEnterprise) => el.phone !== updatedSubEnterprise.phone);
    newState.subEnterprises.unshift(updatedSubEnterprise);
    return newState;
  }),
);
