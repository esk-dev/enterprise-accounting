import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { FormDataService } from 'src/app/_services/form-data.service';
import { CreateSubEnterpiseAction } from 'src/app/store/actions/enterprise.action';

@Component({
  selector: 'app-sub-enterprise',
  templateUrl: './sub-enterprise.component.html',
  styleUrls: ['./sub-enterprise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubEnterpriseComponent implements OnInit {
  public fields$!: Observable<any>;

  constructor(private store: Store, private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.fields$ = this.formDataService.getSubEnterpriseFields();
  }

  public invokeCreation(values: ISubEnterprise | IMainEnterprise): void {
    this.create(values as ISubEnterprise);
  }

  private create(newSubEnterprise: ISubEnterprise): void {
    this.store.dispatch(CreateSubEnterpiseAction({ newSubEnterprise }));
  }
}
