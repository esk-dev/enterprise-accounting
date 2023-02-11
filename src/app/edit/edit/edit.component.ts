import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, mergeMap, ReplaySubject, Subject, takeUntil } from 'rxjs';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import {
  UpdateMainEnterpiseAction,
  UpdateSubEnterpiseAction,
} from 'src/app/store/actions/enterprise.action';
import { selectEnterpriseById } from 'src/app/store/selectors/enterprise.selector';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  public typeForm$: ReplaySubject<string> = new ReplaySubject<string>();

  private destroy$: Subject<boolean> = new Subject<boolean>();

  public formSubEnterprise: FormGroup = new FormGroup({
    _id: new FormControl<string>(''),
    officeAdress: new FormControl<string>('', [Validators.required]),
    phone: new FormControl<string>('', [Validators.required]),
    official: new FormControl<string>('', [Validators.required]),
  });

  public formMainEnterprise: FormGroup = new FormGroup({
    _id: new FormControl<string>(''),
    fullName: new FormControl<string>('', [Validators.required]),
    shortName: new FormControl<string>('', [Validators.required]),
    INN: new FormControl<number>(0, [Validators.required]),
    KPP: new FormControl<number>(0, [Validators.required]),
    founder: new FormControl<string>('', [Validators.required]),
    addres: new FormControl<string>('', [Validators.required]),
    phone: new FormControl<string>('', [Validators.required]),
  });

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        filter((id: number) => id !== null),
        mergeMap((id: number) => {
          return this.store.select(selectEnterpriseById(id.toString()));
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((data: any) => {
        if (data.hasOwnProperty('fullName')) {
          this.formMainEnterprise.setValue({
            _id: data._id,
            fullName: data.fullName,
            shortName: data.shortName,
            INN: data.INN,
            KPP: data.KPP,
            founder: data.founder,
            addres: data.addres,
            phone: data.phone,
          });
          this.typeForm$.next('main');
        }
        if (data.hasOwnProperty('officeAdress')) {
          this.formSubEnterprise.setValue({
            _id: data._id,
            officeAdress: data.officeAdress,
            phone: data.phone,
            official: data.official,
          });
          this.typeForm$.next('sub');
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public updateMainEnterprise(updatedMainEnterprise: IMainEnterprise) {
    this.store.dispatch(UpdateMainEnterpiseAction({ updatedMainEnterprise }));
  }

  public updateSubEnterprise(updatedSubEnterprise: ISubEnterprise) {
    this.store.dispatch(UpdateSubEnterpiseAction({ updatedSubEnterprise }));
  }
}
