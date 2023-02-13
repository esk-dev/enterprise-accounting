import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, switchMap } from 'rxjs';
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
        return this.enterpriseService
          .createMainEnterprise(newMainEnterprise)
          .pipe(map((payload) => LoadEnterpisesAction({ payload })));
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
        );
      }),
    );
  });

  createSubEnterprise$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateSubEnterpiseAction),
      switchMap(({ newSubEnterprise, mainEnterpriseId }) => {
        return this.enterpriseService
          .createSubEnterprise(newSubEnterprise, mainEnterpriseId)
          .pipe(map((payload) => LoadEnterpisesAction({ payload })));
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
        );
      }),
    );
  });
}
