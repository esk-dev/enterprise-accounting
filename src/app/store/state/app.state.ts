import { MainEnterprise } from './../../models/main-enterprise';
import { SubEnterprise } from './../../models/sub-enterprise';
import { User } from './../../models/user';

export interface UserState {
  isAuth: boolean;
  user: User;
}

export interface EnterprisesState {
  mainEnterprises: Array<MainEnterprise>;
  subEnterprises: Array<SubEnterprise>;
}

export interface AppState {
  enterprises: EnterprisesState;
  user: UserState;
}

export const initalUserState: UserState = {
  isAuth: false,
  user: {} as User,
};

export const initalEnterprisesState: EnterprisesState = {
  mainEnterprises: [],
  subEnterprises: [],
};
