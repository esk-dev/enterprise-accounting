import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMainEnterprise } from 'src/app/models/main-enterprise';
import { ISubEnterprise } from 'src/app/models/sub-enterprise';
import { CreateMainEnterpiseAction } from 'src/app/store/actions/enterprise.action';
import { FormDataService } from 'src/app/_services/form-data.service';

@Component({
  selector: 'app-main-enterprise',
  templateUrl: './main-enterprise.component.html',
  styleUrls: ['./main-enterprise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainEnterpriseComponent implements OnInit {
  public fields$!: Observable<any>;

  constructor(private store: Store, private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.fields$ = this.formDataService.getMainEnterpriseFields();
  }

  public invokeCreation(values: IMainEnterprise | ISubEnterprise): void {
    this.create(values as IMainEnterprise);
  }

  private create(newMainEnterprise: IMainEnterprise): void {
    this.store.dispatch(CreateMainEnterpiseAction({ newMainEnterprise }));
  }
}
