import { Status } from './../../product-category/_models/product-category';
import { Message } from './../../apps/mail/message';
import { CustomValidators } from 'ng2-validation';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserSaveTerm, Autority, UserResponse} from './../_model/user.model';
import { UserService } from './../_service/user.service';


const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
 })
export class UserCreateComponent implements OnInit {

  createForm: FormGroup;
  status: UserResponse;
  authoritys: Autority;
  errorOnInit: any;
  responseOnSave: any;
  responseInvalid: any;
  user: UserSaveTerm;
  invalid: boolean;
  failedSave: boolean;
  message: string;
  code: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {

    this.createForm = formBuilder.group({
      userName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.required, CustomValidators.email])],
      authorityId: [[], Validators.compose([Validators.required])]
    });
 this.code = '1';
  }

  ngOnInit() {
      this.userService.getAuthorities().subscribe(author => this.authoritys = author);
  }

  save(evt: Event): void {
    console.log(this.createForm.getRawValue());
    evt.preventDefault();
    const {
      ...user,
     } = this.createForm.getRawValue();

    this.userService.postUserSave({
       ...user
    })
    .subscribe(
      data => {
        this.status = data;
         if (this.code.match(this.status.status.code.toString())) {
            this.failedSave = true;
         } else {
        this.router.navigate(['/user']);
         }
      },
      error =>  {
        console.log('error');
      }
    );
  }
}

