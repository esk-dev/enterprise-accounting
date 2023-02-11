import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { CreateMainEnterpiseAction } from 'src/app/store/actions/enterprise.action';

@Component({
  selector: 'app-main-enterprise',
  templateUrl: './main-enterprise.component.html',
  styleUrls: ['./main-enterprise.component.scss'],
})
export class MainEnterpriseComponent implements OnInit {
  public formMainEnterprise!: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.formMainEnterprise = new FormGroup({
      _id: new FormControl<string>(''),
      fullName: new FormControl<string>('', [Validators.required]),
      shortName: new FormControl<string>('', [Validators.required]),
      INN: new FormControl<number>(0, [Validators.required]),
      KPP: new FormControl<number>(0, [Validators.required]),
      founder: new FormControl<string>('', [Validators.required]),
      addres: new FormControl<string>('', [Validators.required]),
      phone: new FormControl<string>('', [Validators.required]),
    });
  }

  public create(newMainEnterprise: IMainEnterprise) {
    this.store.dispatch(CreateMainEnterpiseAction({ newMainEnterprise }));
  }
}
