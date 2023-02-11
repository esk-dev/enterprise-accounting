import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [EditComponent],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditComponent,
      },
    ]),
    CommonModule,
    SharedModule,
  ],
})
export class EditModule {}
