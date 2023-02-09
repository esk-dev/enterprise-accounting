import { createAction, props } from '@ngrx/store';
import { EnterprisesState } from '../state/app.state';
import { MainEnterprise } from './../../models/main-enterprise';
import { SubEnterprise } from './../../models/sub-enterprise';

export const GetEnterpisesAction = createAction('[ Enterprises ] Get Enterpises');

export const LoadEnterpisesAction = createAction(
  '[ Enterprises ] Load Enterpise',
  props<{ payload: EnterprisesState }>(),
);

export const CreateMainEnterpiseAction = createAction(
  '[ MainEnterprise ] Create MainEnterpise',
  props<{ newMainEnterprise: MainEnterprise }>(),
);

export const UpdateMainEnterpiseAction = createAction(
  '[ MainEnterprise ] Update MainEnterpise',
  props<{ updatedMainEnterprise: MainEnterprise }>(),
);

export const CreateSubEnterpiseAction = createAction(
  '[ SubEnterprise ] Create SubEnterpise',
  props<{ newSubEnterprise: SubEnterprise }>(),
);

export const UpdateSubEnterpiseAction = createAction(
  '[ SubEnterprise ] Update SubEnterpise',
  props<{ updatedSubEnterprise: SubEnterprise }>(),
);
