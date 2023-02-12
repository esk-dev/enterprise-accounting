import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlBase } from './../dynamic-form-classes/form-control-base.class';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss'],
})
export class DynamicFormFieldComponent {

  @Input() field!: FormControlBase<string | number>;

  @Input() form!: FormGroup;

  get isValid() { 
    return this.form.controls[this.field.key].valid; 
  }

}
