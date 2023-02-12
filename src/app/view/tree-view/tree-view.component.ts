import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EnterprisesState } from 'src/app/store/state/app.state';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeViewComponent {
  @Input()
  enterprises$!: Observable<EnterprisesState>;

  trackById(index: number, item: IMainEnterprise | ISubEnterprise) {
    return item._id;
  }
}
