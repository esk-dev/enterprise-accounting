import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMainEnterprise } from '../models/main-enterprise';
// import { IMainEnterprise } from '../models/main-enterprise';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ISubEnterprise } from '../models/sub-enterprise';
import { EnterpriseState } from '../store/state/app.state';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DB: Array<EnterpriseState> = [
  {
    mainEnterprise: {
      fullName: 'Marianne Ruecker',
      shortName: 'Dan',
      INN: 49,
      KPP: 23,
      founder: 'Gustavo Lang I',
      addres: 'Hauck Forks',
      phone: '(205) 434-0649 x4609',
      _id: '1',
    },
    subEnterprises: [
      {
        officeAdress: '39114 Javier Shoal',
        phone: '627-234-0750',
        official: 'Caroline Conn',
        _id: '23',
      },
      {
        officeAdress: '39114 Javier Shoal',
        phone: '627-234-0750',
        official: 'Caroline Conn',
        _id: '13',
      },
    ],
  },
  {
    mainEnterprise: {
      fullName: 'asdasd Ruecker',
      shortName: 'Daasdn',
      INN: 491424124,
      KPP: 2411343,
      founder: 'Gustaasdvo Lang I',
      addres: 'Hauck Foasdrks',
      phone: '(205) 434-0649 x4609',
      _id: '432',
    },
    subEnterprises: [
      {
        officeAdress: '39114 Javier Shoal',
        phone: '627-234-0750',
        official: 'Caroline Conn',
        _id: '131232',
      },
    ],
  },
];
@Injectable({
  providedIn: 'root',
})
export class EnterpriseService {
  private db: BehaviorSubject<Array<EnterpriseState>> = new BehaviorSubject<
    Array<EnterpriseState>
  >(DB);

  public loadEnterprises(): Observable<Array<EnterpriseState>> {
    return this.db.asObservable();
  }

  public createMainEnterprise(
    newMainEnterprise: IMainEnterprise
  ): Observable<Array<EnterpriseState>> {
    const newState = [...this.db.getValue()];
    const enterprise = { ...newMainEnterprise };
    enterprise._id = Math.floor(Math.random() * 3020).toString();
    this.db.next([
      ...newState,
      { mainEnterprise: enterprise, subEnterprises: [] },
    ]);
    return this.db.asObservable();
  }

  public updateMainEnterprise(
    updatedMainEnterprise: IMainEnterprise
  ): Observable<Array<EnterpriseState>> {
    const state = [...this.db.getValue()];
    const newState = state.map((element) => {
      if (element.mainEnterprise._id !== updatedMainEnterprise._id)
        return element;
      return { ...element, mainEnterprise: updatedMainEnterprise };
    });
    this.db.next(newState);
    return this.db.asObservable();
  }

  public createSubEnterprise(
    newSubEnterprise: ISubEnterprise,
    mainEnterpriseId: string
  ): Observable<Array<EnterpriseState>> {
    const state = [...this.db.getValue()];
    const enterprise = { ...newSubEnterprise };
    enterprise._id = Math.floor(Math.random() * 3020).toString();
    const newState = state.map((element) => {
      if (element.mainEnterprise._id !== mainEnterpriseId) return element;
      return { ...element, subEnterprises: [...element.subEnterprises, enterprise] };
    });
    this.db.next(newState);
    return this.db.asObservable();
  }

  public updateSubEnterprise(
    updatedSubEnterprise: ISubEnterprise
  ): Observable<Array<EnterpriseState>> {
    const state = [...this.db.getValue()];
    const newState = state.map((element) => {
      const arr = element.subEnterprises.filter(
        (subEnterprise) => subEnterprise._id !== updatedSubEnterprise._id
      );
      arr.push(updatedSubEnterprise);
      return { ...element, subEnterprises: arr };
    });
    this.db.next(newState);
    return this.db.asObservable();
  }
}
