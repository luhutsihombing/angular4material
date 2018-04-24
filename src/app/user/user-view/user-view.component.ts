import { AuthService } from './../../auth/_service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { User } from './../_model/user.model';
import { UserService } from './../_service/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  user: User;
  errorOnInit: any;
  id: number;
  invalid: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.userService.getUserDetails(this.id)
      .subscribe(user => (this.user = user.body[0]),
        error => (this.errorOnInit = error));
  }


}
