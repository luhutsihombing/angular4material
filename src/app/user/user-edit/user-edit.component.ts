import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { User } from '../_model/user.model';
import { UserSaveTerm} from './../_model/user.model';
import { UserService } from './../_service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
 })
export class UserEditComponent implements OnInit {

  editForm: FormGroup;
  user: User;
  errorOnInit: any;
  id: number;
  responseOnSave: any;
  responseInvalid: any;
  userAuthName: string;

  userUpdateTerm: UserSaveTerm;
  isSaving: boolean;
  saveIsPressed: boolean;
  cancelModalOpened: boolean;
  saveModalOpened: boolean;
  successModalOpened: boolean;
  invalid: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
    this.editForm = formBuilder.group({
      userName: [{value: '', disabled: true }, [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.maxLength(100)]],
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: [{value: '', disabled: true }, [Validators.required, Validators.email]],
      // authorityName : [{value: '', disabled: true }],
    });

    this.saveIsPressed = false;
    this.cancelModalOpened = false;
    this.saveModalOpened = false;
    this.successModalOpened = false;

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.userService.getUserDetails(this.id)
      .subscribe(user => {
        (this.user = user.body[0]),
        this.editForm.patchValue(this.user),
        this.userAuthName = this.user.authorityName;
      },
        error => (this.errorOnInit = error));
  }


  invalidField(controlName: string | string[]): boolean {
    if (this.editForm.get(controlName).errors) {
      return (
        (this.editForm.get(controlName).errors.required && this.saveIsPressed) ||
        this.editForm.get(controlName).errors.maxlength
      );
    }
  }

  save(evt: Event): void {
    console.log(this.user);
    this.saveIsPressed  = true;
    evt.preventDefault();
    this.isSaving = true;
    const {
      ...userSaveTerm
    } = this.editForm.getRawValue();

    this.userService.postUserUpdate({
       ...userSaveTerm,
       authorityId : this.user.authorityId,
       id: this.user.id
      }).subscribe(
      success => {
        console.log('berhasil');
        this.router.navigate(['/user']);
      },
      error => {
        console.error();
      }
    );
  }


}
