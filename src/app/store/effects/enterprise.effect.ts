import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { EnterpriseService } from 'src/app/_services/enterprise.service';
import {
  LoadEnterpisesAction,
  GetEnterpisesAction,
  CreateMainEnterpiseAction,
  UpdateMainEnterpiseAction,
} from '../actions/enterprise.action';
@Injectable({
  providedIn: 'root',
})
export class EnterpriseEffects {
  constructor(
    private actions$: Actions,
    private enterpriseService: EnterpriseService
  ) {}

  getEnterprises$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetEnterpisesAction),
      mergeMap(() => {
        return this.enterpriseService
          .loadEnterprises()
          .pipe(map((payload) => LoadEnterpisesAction({ payload })));
      })
    );
  });

  createMainEnterprise$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateMainEnterpiseAction),
      mergeMap(({ newMainEnterprise }) => {
        return this.enterpriseService
          .createMainEnterprise(newMainEnterprise)
          .pipe(map((payload) => LoadEnterpisesAction({ payload })));
      })
    );
  });

  updateMainEnterprise$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UpdateMainEnterpiseAction),
      mergeMap(({ updatedMainEnterprise }) => {
        return this.enterpriseService
          .updateMainEnterprise(updatedMainEnterprise)
          .pipe(map((payload) => LoadEnterpisesAction({ payload })));
      })
    );
  });
}
