import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EditComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EditComponent,
      },
    ]),
    CommonModule,
    SharedModule
  ],
})
export class EditModule {}
