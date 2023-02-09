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
// TODO Логика проверки сущностей - добавить id для проверки в сущность
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
    newState.mainEnterprises.filter((el) => el._id !== updatedMainEnterprise._id);
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
    newState.subEnterprises.filter((el: SubEnterprise) => el._id !== updatedSubEnterprise._id);
    newState.subEnterprises.unshift(updatedSubEnterprise);
    return newState;
  }),
);
