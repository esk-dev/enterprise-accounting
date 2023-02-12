import { ISubEnterprise } from './sub-enterprise';

export interface IMainEnterprise {
  _id: string;
  fullName: string;
  shortName: string;
  INN: number;
  KPP: number;
  founder: string;
  addres: string;
  phone: string;
}

export type MainEnterprise = {
  _id: string;
  fullName: string;
  shortName: string;
  INN: number;
  KPP: number;
  founder: string;
  addres: string;
  phone: string;
};
