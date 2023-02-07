import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum UserActionType {
  INIT_USER_DATA = '[USER] Init user data'
} 

export class InitUserData implements Action {
  
  readonly type = UserActionType.INIT_USER_DATA;
  
  constructor(public payload: User) {}
  
}

export type UserActionType = InitUserData;