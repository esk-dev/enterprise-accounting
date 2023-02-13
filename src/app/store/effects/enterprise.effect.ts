import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs';
import { EnterpriseService } from 'src/app/_services/enterprise.service';
import {
  LoadEnterpisesAction,
  GetEnterpisesAction,
  CreateMainEnterpiseAction,
  UpdateMainEnterpiseAction,
  CreateSubEnterpiseAction,
  UpdateSubEnterpiseAction,
} from '../actions/enterprise.action';
import { selectAllEnterprises } from '../selectors/enterprise.selector';
@Injectable({
  providedIn: 'root',
})
export class EnterpriseEffects {
  constructor(
    private actions$: Actions,
    private enterpriseService: EnterpriseService,
    private store: Store,
    private route: Router,
  ) {}

  getEnterprises$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetEnterpisesAction),
      concatLatestFrom(() => this.store.select(selectAllEnterprises)),
      switchMap(() => {
        return this.enterpriseService
          .loadEnterprises()
          .pipe(map((payload) => LoadEnterpisesAction({ payload })));
      }),
    );
  });

  createMainEnterprise$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateMainEnterpiseAction),
      switchMap(({ newMainEnterprise }) => {
        return this.enterpriseService.createMainEnterprise(newMainEnterprise).pipe(
          map((payload) => LoadEnterpisesAction({ payload })),
          tap(() => this.route.navigateByUrl('/view')),
        );
      }),
    );
  });

  updateMainEnterprise$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UpdateMainEnterpiseAction),
      switchMap(({ updatedMainEnterprise }) => {
        return this.enterpriseService.updateMainEnterprise(updatedMainEnterprise).pipe(
          map((payload) => {
            console.log(payload);
            return LoadEnterpisesAction({ payload });
          }),
          tap(() => this.route.navigateByUrl('/view')),
        );
      }),
    );
  });

  createSubEnterprise$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateSubEnterpiseAction),
      switchMap(({ newSubEnterprise, mainEnterpriseId }) => {
        return this.enterpriseService.createSubEnterprise(newSubEnterprise, mainEnterpriseId).pipe(
          map((payload) => LoadEnterpisesAction({ payload })),
          tap(() => this.route.navigateByUrl('/view')),
        );
      }),
    );
  });

  updateSubEnterprise$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UpdateSubEnterpiseAction),
      switchMap(({ updatedSubEnterprise }) => {
        return this.enterpriseService.updateSubEnterprise(updatedSubEnterprise).pipe(
          map((payload) => {
            console.log(payload);
            return LoadEnterpisesAction({ payload });
          }),
          tap(() => this.route.navigateByUrl('/view')),
        );
      }),
    );
  });
}
