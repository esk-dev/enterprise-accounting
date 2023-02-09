import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  GetEnterpisesAction,
  LoadEnterpisesAction,
} from 'src/app/store/actions/enterprise.action';
import { selectAllEnterprises } from 'src/app/store/selectors/enterprise.selector';
import { EnterprisesState } from 'src/app/store/state/app.state';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  constructor(private store: Store) {}

  public enterprises$!: Observable<EnterprisesState>;

  public view$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'listView'
  );

  public toggleView(chipsValue: string) {
    if (this.view$.getValue() === chipsValue) {
      return;
    }
    this.view$.next(chipsValue);
  }

  ngOnInit(): void {
    this.store.dispatch(GetEnterpisesAction());
    this.enterprises$ = this.store
      .select(selectAllEnterprises)
      .pipe(tap((data) => console.log(data)));
  }
}
