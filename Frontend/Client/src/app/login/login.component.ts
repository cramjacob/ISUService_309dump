import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ApiUser } from '../models/user.model';

// import {AlertService, AuthenticationService} from '@/services';

@Component({
  templateUrl: './login.component.html',
  selector: 'app-login'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const user = {
      Email: this.loginForm.value.email,
      Password: this.loginForm.value.password
    } as ApiUser;

    if (this.authService.Login(user)) {
      this.router.navigate(['/dashboard']);
    }

    this.loading = false;
  }
}
