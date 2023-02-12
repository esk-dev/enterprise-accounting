import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EnterprisesState } from 'src/app/store/state/app.state';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

/*
* При создании стора предполагались две отдельные сущности, в атрибутах которых, не было указано об их связи.
* Для отрисовки дерева нужны рекурсивные данные. 
* https://stackblitz.com/edit/angular-table-tree-example?file=app%2Ftable-basic-example.ts 
* https://www.geeksforgeeks.org/angular-material-tree/
* https://stackblitz.com/edit/angular-material-nested-tree-with-updates?file=src%2Fapp%2Ftree-nested-overview-example.ts
*/

interface INode {
  enterprise: IMainEnterprise | ISubEnterprise;
  children?: INode[];
}

const TREE_DATA: INode[] = [
  {
    enterprise: {
      fullName: 'Marianne Ruecker',
      shortName: 'Dan',
      INN: 49,
      KPP: 23,
      founder: 'Gustavo Lang I',
      addres: 'Hauck Forks',
      phone: '(205) 434-0649 x4609',
      _id: '340',
    },
    children: [{
      enterprise: {
        fullName: 'Marianne Ruecker',
        shortName: 'Dan',
        INN: 49,
        KPP: 23,
        founder: 'Gustavo Lang I',
        addres: 'Hauck Forks',
        phone: '(205) 434-0649 x4609',
        _id: '2342',
      },
      children: [{
        enterprise: {
          officeAdress: '39114 Javier Shoal',
          phone: '627-234-0750',
          official: 'Caroline Conn',
          _id: '123',
        },
      }],
    },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  data: IMainEnterprise | ISubEnterprise;
  level: number;
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeViewComponent {
  @Input() enterprises!: EnterprisesState;

  private _transformer = (node: INode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      data: node.enterprise,
      level: level,
    };
  };
  
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );
  
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );
  
  dataSource = new MatTreeFlatDataSource(
    this.treeControl, this.treeFlattener);
  
  constructor() {
    this.dataSource.data = ;
  }
  
  hasChild = (_: number, 
    node: ExampleFlatNode) => node.expandable;
  

  trackById(index: number, item: IMainEnterprise | ISubEnterprise) {
    return item._id;
  }
}
