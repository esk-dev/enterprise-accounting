import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ISubEnterprise } from './../models/sub-enterprise';
import { IMainEnterprise } from './../models/main-enterprise';
import { FormControlBase } from './../shared/dynamic-form/dynamic-form-classes/form-control-base.class';
import {
  TextFormControl,
  NumberFormControl,
} from './../shared/dynamic-form/dynamic-form-classes/typed-form-control.class';
@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  getMainEnterpriseFields(
    enterprise?: IMainEnterprise
  ): Observable<FormControlBase<number | string>[]> {
    const fields: FormControlBase<any>[] = [
      new TextFormControl({
        key: '_id',
        value: enterprise?._id,
        required: false,
        show: false,
      }),
      new TextFormControl({
        key: 'fullName',
        label: 'Полное наименование',
        value: enterprise?.fullName,
        required: true,
      }),
      new TextFormControl({
        key: 'shortName',
        label: 'Краткое наименование',
        value: enterprise?.shortName,
        required: true,
      }),
      new TextFormControl({
        key: 'founder',
        label: 'Учредитель',
        value: enterprise?.founder,
        required: true,
      }),
      new TextFormControl({
        key: 'addres',
        label: 'Адрес',
        value: enterprise?.addres,
        required: true,
      }),
      new NumberFormControl({
        key: 'INN',
        label: 'ИНН',
        value: enterprise?.INN,
        required: true,
      }),
      new NumberFormControl({
        key: 'KPP',
        label: 'КПП',
        value: enterprise?.KPP,
        required: true,
      }),
      new TextFormControl({
        key: 'phone',
        label: 'Номер телефона',
        value: enterprise?.phone,
        required: true,
      }),
    ];
    console.log(fields);
    return of(fields);
  }

  getSubEnterpriseFields(
    enterprise?: ISubEnterprise
  ): Observable<FormControlBase<number | string>[]> {
    const fields: FormControlBase<number | string>[] = [
      new TextFormControl({
        key: '_id',
        value: enterprise?._id,
        required: false,
        show: false,
      }),
      new TextFormControl({
        key: 'official',
        label: 'Должностное лицо',
        value: enterprise?.official,
        required: true,
      }),
      new TextFormControl({
        key: 'officeAdress',
        label: 'Адрес офиса',
        value: enterprise?.officeAdress,
        required: true,
      }),
      new TextFormControl({
        key: 'phone',
        label: 'Номер телефона',
        value: enterprise?.phone,
        required: true,
      }),
    ];
    return of(fields);
  }
}
