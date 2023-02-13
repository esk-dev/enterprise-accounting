import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SubComponent } from './sub/sub.component';

@NgModule({
  declarations: [MainComponent, SubComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'main-enterprise/:id',
        component: MainComponent,
      },
      {
        path: 'sub-enterprise/:id',
        component: SubComponent,
      },
    ]),
    CommonModule,
    SharedModule,
  ],
})
export class EditModule {}
