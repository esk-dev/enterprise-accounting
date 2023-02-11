import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainEnterpriseComponent } from './main-enterprise/main-enterprise.component';
import { SubEnterpriseComponent } from './sub-enterprise/sub-enterprise.component';

@NgModule({
  declarations: [MainEnterpriseComponent, SubEnterpriseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'main-enterprise',
        component: MainEnterpriseComponent,
      },
      {
        path: 'sub-enterprise',
        component: SubEnterpriseComponent,
      },
    ]),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    SharedModule,
  ],
})
export class CreateModule {}
