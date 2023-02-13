import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isAuth!: Observable<boolean>;
  constructor(private store: Store) {
    this.isAuth = this.store.select(selectIsAuth);
  }
}
