import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ViewRoutingModule } from './view.routing-module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [ListViewComponent, TreeViewComponent, MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    ViewRoutingModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
})
export class ViewModule {}
