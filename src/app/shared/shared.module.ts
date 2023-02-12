import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { RoleDirective } from './directives/role.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './dynamic-form/dynamic-form-field/dynamic-form-field.component';

@NgModule({
  declarations: [RoleDirective, DynamicFormComponent, DynamicFormFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [ReactiveFormsModule, FormsModule, RoleDirective, DynamicFormComponent],
})
export class SharedModule {}
