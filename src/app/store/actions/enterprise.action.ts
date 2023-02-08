import { createAction, props } from '@ngrx/store';
import { MainEnterprise } from './../../models/main-enterprise';
import { SubEnterprise } from './../../models/sub-enterprise';

export const GetMainEnterpisesAction = createAction(
  '[ MainEnterprise ] Get MainEnterpise'
);

export const CreateMainEnterpisesAction = createAction(
  '[ MainEnterprise ] Create MainEnterpise',
  props<{ payload: MainEnterprise }>()
);

export const UpdateMainEnterpisesAction = createAction(
  '[ MainEnterprise ] Update MainEnterpise',
  props<{ payload: MainEnterprise}>()
);

// sub enterprises
export const GetSubEnterpisesAction = createAction(
  '[ SubEnterprise ] Get SubEnterpise'
);

export const CreateSubEnterpisesAction = createAction(
  '[ SubEnterprise ] Create SubEnterpise',
  props<{ payload: SubEnterprise }>()
);

export const UpdateSubEnterpisesAction = createAction(
  '[ SubEnterprise ] Update SubEnterpise',
  props<{ payload: SubEnterprise}>()
);
