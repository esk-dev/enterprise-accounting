import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EnterpriseState } from 'src/app/store/state/app.state';

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

  isExpanded = (node: string): boolean => {
    return this.expandedFolder.indexOf(node) !== -1;
  };
}
