import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import { CreateSubEnterpiseAction } from 'src/app/store/actions/enterprise.action';
import { FormDataService } from 'src/app/_services/form-data.service';

@Component({
  selector: 'app-sub-enterprise',
  templateUrl: './sub-enterprise.component.html',
  styleUrls: ['./sub-enterprise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubEnterpriseComponent implements OnInit {
  public fields$!: Observable<any>;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  private mainEnterpriseId: string = '';

  constructor(
    private store: Store,
    private formDataService: FormDataService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        takeUntil(this.destroy$),
      )
      .subscribe((id) => (this.mainEnterpriseId = id));
    this.fields$ = this.formDataService.getSubEnterpriseFields();
  }

  public invokeCreation(values: ISubEnterprise | IMainEnterprise): void {
    this.create(values as ISubEnterprise, this.mainEnterpriseId);
  }

  private create(newSubEnterprise: ISubEnterprise, mainEnterpriseId: string): void {
    this.store.dispatch(CreateSubEnterpiseAction({ newSubEnterprise, mainEnterpriseId }));
  }
}
