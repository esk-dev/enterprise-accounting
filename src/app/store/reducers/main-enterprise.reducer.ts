import { MainEnterprise } from './../models/main-enterprise';
import { createReducer } from '@ngrx/store';

export const initalState: ReadonlyArray<MainEnterprise> = [];

export const MainEnterpriseReducer = createReducer(initialState);
