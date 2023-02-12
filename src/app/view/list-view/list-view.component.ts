import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EnterprisesState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListViewComponent {
  @Input() enterprises$!: Observable<EnterprisesState>;

  trackById(index: number, item: IMainEnterprise | ISubEnterprise) {
    return item._id;
  }
}
