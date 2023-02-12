import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  filter,
  map,
  mergeMap,
  Observable,
  of,
  Subject,
  takeUntil,
} from 'rxjs';
import {
  IMainEnterprise
} from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import {
  UpdateMainEnterpiseAction,
  UpdateSubEnterpiseAction,
} from 'src/app/store/actions/enterprise.action';
import { selectEnterpriseById } from 'src/app/store/selectors/enterprise.selector';
import { FormDataService } from './../../_services/form-data.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit, OnDestroy {
  private typeForm$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private destroy$: Subject<boolean> = new Subject<boolean>();

  public fields$!: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private formDataService: FormDataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        filter((id: number) => id !== null),
        mergeMap((id: number) => {
          return this.store.select(selectEnterpriseById(id.toString()));
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((data: Object | null) => {
        console.log(data);
        switch (data?.hasOwnProperty('fullName')) {
          case true:
            this.fields$ = this.formDataService.getMainEnterpriseFields(
              data as IMainEnterprise
            );
            this.typeForm$.next('main');
            break;

          case false:
            this.fields$ = this.formDataService.getSubEnterpriseFields(
              data as ISubEnterprise
            );
            this.typeForm$.next('sub');

            break;
          default:
            this.fields$ = of([]);
            break;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public update(values: any): void {
    switch (this.typeForm$.getValue()) {
      case 'main':
        this.updateMainEnterprise(values);
        break;

      case 'sub':
        this.updateSubEnterprise(values);
        break;

      default:
        break;
    }
  }

  private updateMainEnterprise(updatedMainEnterprise: IMainEnterprise): void {
    this.store.dispatch(UpdateMainEnterpiseAction({ updatedMainEnterprise }));
  }

  private updateSubEnterprise(updatedSubEnterprise: ISubEnterprise): void {
    this.store.dispatch(UpdateSubEnterpiseAction({ updatedSubEnterprise }));
  }
}
