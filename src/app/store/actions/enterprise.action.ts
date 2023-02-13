import { createAction, props } from '@ngrx/store';
import { EnterpriseState } from '../state/app.state';
import { IMainEnterprise } from './../../models/main-enterprise';
import { ISubEnterprise } from './../../models/sub-enterprise';

export const GetEnterpisesAction = createAction('[ Enterprises ] Get Enterpises');

export const LoadEnterpisesAction = createAction(
  '[ Enterprises ] Load Enterpise',
  props<{ payload: Array<EnterpriseState> }>(),
);

export const CreateMainEnterpiseAction = createAction(
  '[ MainEnterprise ] Create MainEnterpise',
  props<{ newMainEnterprise: IMainEnterprise }>(),
);

export const UpdateMainEnterpiseAction = createAction(
  '[ MainEnterprise ] Update MainEnterpise',
  props<{ updatedMainEnterprise: IMainEnterprise }>(),
);

export const CreateSubEnterpiseAction = createAction(
  '[ SubEnterprise ] Create SubEnterpise',
  props<{ newSubEnterprise: ISubEnterprise; mainEnterpriseId: string }>(),
);

export const UpdateSubEnterpiseAction = createAction(
  '[ SubEnterprise ] Update SubEnterpise',
  props<{ updatedSubEnterprise: ISubEnterprise }>(),
);
