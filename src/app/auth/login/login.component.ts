import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [(Validators.required, Validators.minLength(8))]),
    });
  }

  public login() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe((userData: User) => {
      this.authService.authState.next(true);
      console.log(userData); // dispatch to user store
    });
  }
}
