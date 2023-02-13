import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Observable, map, filter, mergeMap, takeUntil } from 'rxjs';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import { UpdateSubEnterpiseAction } from 'src/app/store/actions/enterprise.action';
import { selectSubEnterprisesById } from 'src/app/store/selectors/enterprise.selector';
import { FormDataService } from 'src/app/_services/form-data.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss'],
})
export class SubComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public fields$!: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private formDataService: FormDataService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        filter((id: number) => id !== null),
        mergeMap((id: number) => {
          return this.store.select(selectSubEnterprisesById(id.toString()));
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((data: ISubEnterprise | null) => {
        this.fields$ = this.formDataService.getSubEnterpriseFields(data as ISubEnterprise);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public invokeUpdate(values: ISubEnterprise | IMainEnterprise): void {
    this.update(values as ISubEnterprise);
  }

  private update(updatedSubEnterprise: ISubEnterprise): void {
    this.store.dispatch(UpdateSubEnterpiseAction({ updatedSubEnterprise }));
  }
}
