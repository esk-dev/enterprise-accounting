import { FormControlBase } from './form-control-base.class';

export class TextFormControl extends FormControlBase<string> {
  override controlType = 'text';
}

export class EmailFormControl extends FormControlBase<string> {
  override controlType = 'email';
}

export class NumberFormControl extends FormControlBase<number> {
  override controlType = 'number';
}
