import { Login } from './../_model/auth.model';
import { AuthService } from './../_service/auth.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login:  Login;
  nextURL: string;
  errorOnLogin: any;
  isLoggingIn: boolean;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private  authService: AuthService
  ) {
    this.loginForm = formBuilder.group({
      username: ['' , Validators.compose ( [ Validators.required ] )] ,
      password: ['' , Validators.compose ( [ Validators.required ] )]
    });

    this.isLoggingIn = false;
  }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(qParams => (this.nextURL = qParams.next));
  }

  doLogin(evt: Event): void {
    evt.preventDefault();
    let term: Login;

    term  = {
      ...this.loginForm.getRawValue()
    };
     this.authService.postLogin(term).subscribe(
      auth => (auth ? this.router.navigate([this.nextURL ? this.nextURL : '/dashboard']) : console.log('auth')),
      error => {
        this.errorOnLogin = error;
        this.isLoggingIn = false;
      }
    );
    this.isLoggingIn = true;
}
}
