import { IMainEnterprise } from './../../models/main-enterprise';
import { ISubEnterprise } from './../../models/sub-enterprise';
import { IUser } from './../../models/user';

export interface UserState {
  isAuth: boolean;
  user: IUser;
}

export interface EnterprisesState {
  mainEnterprises: Array<IMainEnterprise>;
  subEnterprises: Array<ISubEnterprise>;
}

export interface AppState {
  enterprises: EnterprisesState;
  user: UserState;
}

export const initalUserState: UserState = {
  isAuth: false,
  user: {} as IUser,
};

export const initalEnterprisesState: EnterprisesState = {
  mainEnterprises: [],
  subEnterprises: [],
};
