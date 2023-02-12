import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlBase } from './../dynamic-form-classes/form-control-base.class';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  toFormGroup(fields: Array<FormControlBase<string | number | any>>) {
    const group: any = {};

    fields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
