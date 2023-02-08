import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { MainEnterprise } from '../models/main-enterprise';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SubEnterprise } from '../models/sub-enterprise';
import { EnterprisesState } from '../store/state/app.state';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DB: EnterprisesState = {
  mainEnterprises: [
    {
      fullName: 'ASDF',
      shortName: 'short name',
      INN: 12345678,
      KPP: 12345678,
      founder: 'Name founder',
      addres: 'Some city',
      phone: 123456678,
    },
  ],
  subEnterprises: [
    {
      officeAdress: 'ASDF',
      phone: 12345678,
      official: 'name',
    },
  ],
};
@Injectable({
  providedIn: 'root',
})
export class EnterpriseService {
  private db: Observable<EnterprisesState> = of(DB);

  public loadEnterprises(): Observable<EnterprisesState> {
    return this.db.pipe();
  }

  public createMainEnterprise(newMainEnterprise: MainEnterprise): Observable<EnterprisesState> {
    return this.db.pipe(
      map((data) => {
        data.mainEnterprises.push(newMainEnterprise);
        return data;
      }),
    );
  }
}
