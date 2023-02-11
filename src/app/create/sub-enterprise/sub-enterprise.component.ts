import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import { CreateSubEnterpiseAction } from 'src/app/store/actions/enterprise.action';

@Component({
  selector: 'app-sub-enterprise',
  templateUrl: './sub-enterprise.component.html',
  styleUrls: ['./sub-enterprise.component.scss'],
})
export class SubEnterpriseComponent implements OnInit {
  public formSubEnterprise!: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.formSubEnterprise = new FormGroup({
      _id: new FormControl<string>(''),
      officeAdress: new FormControl<string>('', [Validators.required]),
      phone: new FormControl<string>('', [Validators.required]),
      official: new FormControl<string>('', [Validators.required]),
    });
  }

  public create(newSubEnterprise: ISubEnterprise) {
    this.store.dispatch(CreateSubEnterpiseAction({ newSubEnterprise }));
  }
}
