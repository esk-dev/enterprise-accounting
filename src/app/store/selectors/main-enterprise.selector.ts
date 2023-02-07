import { createFeatureSelector } from '@ngrx/store';
import { MainEnterprise } from './../models/main-enterprise';
 
export const selectMainEnterprise = createFeatureSelector<MainEnterprise[]>('main-enterprise');