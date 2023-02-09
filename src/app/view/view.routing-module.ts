import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListViewComponent } from './list-view/list-view.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'list', component: ListViewComponent },
      { path: 'tree', component: TreeViewComponent },
      {
        path: '',
        redirectTo: '/view/list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
