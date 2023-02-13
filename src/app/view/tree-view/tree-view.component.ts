import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EnterpriseState } from 'src/app/store/state/app.state';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

/*
 * https://stackblitz.com/edit/angular-table-tree-example?file=app%2Ftable-basic-example.ts
 * https://www.geeksforgeeks.org/angular-material-tree/
 * https://stackblitz.com/edit/angular-material-nested-tree-with-updates?file=src%2Fapp%2Ftree-nested-overview-example.ts
 */

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeViewComponent {
  @Input() enterprises$!: Observable<Array<EnterpriseState>>;

  private expandedFolder: Array<string> = [];

  setToExpandedFolder = (node: string): void => {
    const array = this.expandedFolder.slice(0);
    array.push(node);
    this.expandedFolder = array;
  };

  unsetFromExpandedFolder = (node: string): void => {
    const idx = this.expandedFolder.indexOf(node);
    const array = this.expandedFolder.slice(0);
    array.splice(idx, 1);
    this.expandedFolder = array;
  };

  nodeClicked = (node: string): void => {
    if (!this.isExpanded(node)) {
      this.setToExpandedFolder(node);
    } else {
      this.unsetFromExpandedFolder(node);
    }
  };

  // viewFilesFromFolder = (node: ITreeNode): void => {
  //   const folder = node.type === 'directory' ? node.contents : node;
  //   setFolder(folder);
  // };

  isExpanded = (node: string): boolean => {
    return this.expandedFolder.indexOf(node) !== -1;
  };
}
