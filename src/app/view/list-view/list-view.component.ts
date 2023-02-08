import { Component, OnInit } from '@angular/core';
import { GetEnterpisesAction } from '../../store/actions/enterprise.action';
import { Store } from '@ngrx/store';
import { EnterprisesState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { selectAllEnterprises } from 'src/app/store/selectors/enterprise.selector';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  public enterprises$: Observable<EnterprisesState> = this.store.select(selectAllEnterprises);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(GetEnterpisesAction());
    console.log(this.enterprises$);
  }
}
