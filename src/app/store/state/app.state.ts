import { IMainEnterprise } from './../../models/main-enterprise';
import { ISubEnterprise } from './../../models/sub-enterprise';
import { IUser } from './../../models/user';

export interface UserState {
  isAuth: boolean;
  user: IUser;
}

export interface EnterpriseState {
  mainEnterprise: IMainEnterprise;
  subEnterprises: Array<ISubEnterprise>;
}

export interface AppState {
  enterprises: Array<EnterpriseState>;
  user: UserState;
}

export const initalUserState: UserState = {
  isAuth: false,
  user: {} as IUser,
};

export const initalEnterpriseState: Array<EnterpriseState> = [
  {
    mainEnterprise: {} as IMainEnterprise,
    subEnterprises: [],
  },
];
