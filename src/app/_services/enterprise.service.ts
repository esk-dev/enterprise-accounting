import { Injectable } from '@angular/core';
import { map, Observable, of, throwError } from 'rxjs';
import { MainEnterprise } from '../models/main-enterprise';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SubEnterprise } from '../models/sub-enterprise';
import { EnterprisesState } from '../store/state/app.state';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DB: EnterprisesState = {
  mainEnterprises: [
    {
      fullName: 'Marianne Ruecker',
      shortName: 'Dan',
      INN: 49,
      KPP: 23,
      founder: 'Gustavo Lang I',
      addres: 'Hauck Forks',
      phone: '(205) 434-0649 x4609',
      _id: '1',
    },
    {
      fullName: 'Jeffery Cruickshank',
      shortName: 'Eldon',
      INN: 36,
      KPP: 7,
      founder: 'Faith Schmitt',
      addres: 'Cummerata Parkways',
      phone: '1-663-210-4815 x21251',
      _id: '2',
    },
    {
      fullName: 'Audrey Skiles',
      shortName: 'Jena',
      INN: 17,
      KPP: 47,
      founder: "Lula D'Amore",
      addres: 'Rau Circle',
      phone: '(738) 934-4575',
      _id: '3',
    },
    {
      fullName: 'Bob Hagenes',
      shortName: 'Greg',
      INN: 86,
      KPP: 67,
      founder: 'Arturo Boehm',
      addres: 'Willard Locks',
      phone: '889-306-1620 x15914',
      _id: '4',
    },
    {
      fullName: 'Simon Ledner',
      shortName: 'Victor',
      INN: 52,
      KPP: 27,
      founder: 'Nancy Lemke',
      addres: 'Myrl Trail',
      phone: '692-387-3951 x302',
      _id: '5',
    },
  ],
  subEnterprises: [
    {
      officeAdress: '39114 Javier Shoal',
      phone: '627-234-0750',
      official: 'Caroline Conn',
      _id: '1',
    },
    {
      officeAdress: '17126 Dietrich Fort',
      phone: '492-464-9637',
      official: 'Minnie Ritchie',
      _id: '2',
    },
    {
      officeAdress: '4308 Genesis Islands',
      phone: '491-477-0098',
      official: 'Stuart Rutherford',
      _id: '3',
    },
    {
      officeAdress: '78331 Ebert Wells',
      phone: '843-491-4164',
      official: "Bennie D'Amore V",
      _id: '4',
    },
    {
      officeAdress: '505 Shanahan Lane',
      phone: '620-463-3666',
      official: 'Nichole Brakus',
      _id: '5',
    },
    {
      officeAdress: '7652 Thiel Brook',
      phone: '814-350-4050',
      official: 'Mr. Deanna Mayer',
      _id: '6',
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

  public createMainEnterprise(
    newMainEnterprise: MainEnterprise
  ): Observable<EnterprisesState> {
    return this.db.pipe(
      map((data) => {
        data.mainEnterprises.push(newMainEnterprise);
        return data;
      })
    );
  }

  public updateMainEnterprise(
    updatedMainEnterprise: MainEnterprise
  ): Observable<EnterprisesState> {
    return this.db.pipe(
      map((data) => {
        data.mainEnterprises.forEach((el) =>
          el._id === updatedMainEnterprise._id
            ? (el = updatedMainEnterprise)
            : throwError(() => 'Главная организация не обновлена')
        );
        return data;
      })
    );
  }
}
