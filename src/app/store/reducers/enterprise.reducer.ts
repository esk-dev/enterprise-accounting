import { createReducer, on } from '@ngrx/store';
// import { IMainEnterprise } from 'src/app/models/main-enterprise';
// import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import {
  LoadEnterpisesAction,
  CreateMainEnterpiseAction,
  UpdateMainEnterpiseAction,
  CreateSubEnterpiseAction,
  UpdateSubEnterpiseAction,
} from '../actions/enterprise.action';
import { EnterpriseState, initalEnterpriseState } from './../state/app.state';

export const enterpriseReducer = createReducer(
  initalEnterpriseState,
  on(LoadEnterpisesAction, (state, { payload }): Array<EnterpriseState> => {
    return payload;
  }),

  on(CreateMainEnterpiseAction, (state, { newMainEnterprise }): Array<EnterpriseState> => {
    const newState = [...state];
    return [...newState, { mainEnterprise: newMainEnterprise, subEnterprises: [] }];
  }),

  on(UpdateMainEnterpiseAction, (state, { updatedMainEnterprise }): Array<EnterpriseState> => {
    const newState = [...state];
    return newState.map((element) => {
      if (element.mainEnterprise._id !== updatedMainEnterprise._id) return element;
      return { ...element, mainEnterprise: updatedMainEnterprise };
    });
  }),

  on(
    CreateSubEnterpiseAction,
    (state, { newSubEnterprise, mainEnterpriseId }): Array<EnterpriseState> => {
      const newState = [...state];
      return newState.map((e) => {
        if (e.mainEnterprise._id !== mainEnterpriseId) return e;
        return { ...e, subEnterprises: [...e.subEnterprises, { ...newSubEnterprise }] };
      });
    },
  ),

  on(UpdateSubEnterpiseAction, (state, { updatedSubEnterprise }): Array<EnterpriseState> => {
    const newState = [...state];
    return newState.map((e) => {
      const arr = e.subEnterprises.filter((v) => v._id !== updatedSubEnterprise._id);
      arr.push(updatedSubEnterprise);
      return { ...e, subEnterprises: arr };
    });
  }),
);
