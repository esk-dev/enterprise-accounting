import { MainEnterprise } from './../models/main-enterprise';
import { SubEnterprise } from './../models/sub-enterprise';
import { User } from './../models/user';

export interface UserState {
  isAuth: boolean;
  user: User;
}

export interface MainEnterpriseState {
  MainEnterprises: MainEnterprise[];
}

export interface SubEnterpriseState {
  SubEnterprises: SubEnterprise[];
}

export const initalUserState: UserState = {
  isAuth: false,
  user: {} as User,
};
