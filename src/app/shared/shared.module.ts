import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [ButtonComponent, ReactiveFormsModule, FormsModule, RouterModule],
})
export class SharedModule {}
