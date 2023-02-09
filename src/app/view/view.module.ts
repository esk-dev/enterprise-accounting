import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ViewRoutingModule } from './view.routing-module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [ListViewComponent, TreeViewComponent, MainComponent],
  imports: [CommonModule, SharedModule, ViewRoutingModule],
})
export class ViewModule {}
