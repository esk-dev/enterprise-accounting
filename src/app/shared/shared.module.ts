import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
// import { FormComponent } from './form/form.component';
import { RoleDirective } from './directives/role.directive';
@NgModule({
  declarations: [RoleDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [ReactiveFormsModule, FormsModule, RouterModule, RoleDirective],
})
export class SharedModule {}
