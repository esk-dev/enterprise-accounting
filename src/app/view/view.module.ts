import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

@NgModule({
  declarations: [ListViewComponent, TreeViewComponent],
  imports: [CommonModule],
})
export class ViewModule {}
