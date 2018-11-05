import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ApiUser } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
  ) {  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.value.password !== this.registerForm.value.password2) {
      console.log(this.registerForm.value.password);
      console.log(this.registerForm.value.password2);
      return;
    }

    const user = {
      Name: this.registerForm.value.name,
      Email: this.registerForm.value.email,
      Password: this.registerForm.value.password
    } as ApiUser;

    if (this.authService.Register(user)) {
      console.log(JSON.parse(localStorage.getItem('currentUser')));
      this.router.navigate(['/login']);
    }

    this.loading = true;
    console.log(this.registerForm);
  }
}
