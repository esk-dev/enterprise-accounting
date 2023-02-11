import { Component, Input } from '@angular/core';
import { MainEnterprise } from 'src/app/models/main-enterprise';
import { SubEnterprise } from 'src/app/models/sub-enterprise';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() model!: MainEnterprise | SubEnterprise;

  public fields!: Array<any>;

  // formValues!: MainEnterprise | SubEnterprise | null;

  // public formSubEnterprise: FormGroup = new FormGroup({
  //   _id: new FormControl<string>(''),
  //   officeAdress: new FormControl<string>('', [Validators.required]),
  //   phone: new FormControl<string>('', [Validators.required]),
  //   official: new FormControl<string>('', [Validators.required]),
  // });

  // public formMainEnterprise: FormGroup = new FormGroup({
  //   _id: new FormControl<string>(''),
  //   fullName: new FormControl<string>('', [Validators.required]),
  //   shortName: new FormControl<string>('', [Validators.required]),
  //   INN: new FormControl<number>(0, [Validators.required]),
  //   KPP: new FormControl<number>(0, [Validators.required]),
  //   founder: new FormControl<string>('', [Validators.required]),
  //   addres: new FormControl<string>('', [Validators.required]),
  //   phone: new FormControl<string>('', [Validators.required]),
  // });

  // constructor() {}

  // ngOnInit(): void {

  // }
}
