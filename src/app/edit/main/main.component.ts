import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, filter, mergeMap, takeUntil, Subject, Observable } from 'rxjs';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import { UpdateMainEnterpiseAction } from 'src/app/store/actions/enterprise.action';
import { selectMainEnterprisesById } from 'src/app/store/selectors/enterprise.selector';
import { FormDataService } from 'src/app/_services/form-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
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
          return this.store.select(selectMainEnterprisesById(id.toString()));
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((data: IMainEnterprise | null) => {
        this.fields$ = this.formDataService.getMainEnterpriseFields(data as IMainEnterprise);
      });
  }
  
  ngOnDestroy(): void {
      this.destroy$.next(true);
  }

  public invokeUpdate(values: ISubEnterprise | IMainEnterprise): void {
    this.update(values as IMainEnterprise);
  }

  private update(updatedMainEnterprise: IMainEnterprise): void {
    this.store.dispatch(UpdateMainEnterpiseAction({ updatedMainEnterprise }));
  }
}
