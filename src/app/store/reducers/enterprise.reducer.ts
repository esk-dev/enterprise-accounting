import { MainEnterprise } from './../models/main-enterprise';
import { SubEnterprise } from './../models/sub-enterprise';
import { createReducer, on } from '@ngrx/store';
import {
  GetMainEnterpisesAction,
  CreateMainEnterpisesAction,
  UpdateMainEnterpisesAction,
  GetSubEnterpisesAction,
  CreateSubEnterpisesAction,
  UpdateSubEnterpisesAction,
} from '../actions/enterprise.action';
import { EnterprisesState, initalEnterprisesState } from './../index';

export const mainEnterprisesReducer = createReducer(
  initalEnterprisesState,
  on(GetMainEnterpisesAction, (state): MainEnterprise => ({ ...state }))
);
