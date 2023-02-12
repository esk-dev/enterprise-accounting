import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import { FormControlBase } from './dynamic-form-classes/form-control-base.class';
import { FormControlService } from './services/form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Output() emitSubmittedValues = new EventEmitter<
  IMainEnterprise | ISubEnterprise
  >();

  @Input() fields: FormControlBase<string | number>[] | null = [];

  form!: FormGroup;

  constructor(private fcs: FormControlService) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(
      this.fields as Array<FormControlBase<string | number>>,
    );
  }

  onSubmit() {
    console.log(this.form.getRawValue());
    this.emitSubmittedValues.emit(this.form.getRawValue());
  }
}
