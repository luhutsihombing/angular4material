import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PAGING_PAGESIZEOPTIONS, DELETE_TITLE_DIALOG, DELETE_MESSAGE_DIALOG } from './../../_const/properties.const';
import { DialogsService } from './../../shared/dialogs/dialogs.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserSaveTerm, UserSearchList, User } from './../_model/user.model';
import { UserService } from './../_service/user.service';
import { PAGING_PAGESIZE } from '../../_const/properties.const';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
 })
export class UserSearchComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'userName', 'firstName', 'lastName', 'email', 'actions'];
  fleetData = null;
  dataSource = new MatTableDataSource<User>();
  pageSize: number = PAGING_PAGESIZE;
  pageSizeOptions: number[] = PAGING_PAGESIZEOPTIONS;

  title: string ;
  message: string;
  color: string;

  result: any;

  user: User[];
  userSearchList: UserSearchList;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private userService: UserService,
    private dialogsService: DialogsService,
  ) {
  this.title = `${DELETE_TITLE_DIALOG}`;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.userService.getSearchList().subscribe(
      userList => {
        this.user = userList.body;
        this.fleetData = userList.body;
        this.dataSource.data = this.fleetData;

      }
    );
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public showDialog(user: User) {
    this.dialogsService.confirm(this.title, this.getMessage(user.firstName), user, this.color = 'warn')
      .subscribe(res => {
        this.result = res;
        if (res) {
          this.userService.deleteUser(this.result.id)
            .subscribe(successCode => {
              this.userSearchList = successCode;
              this.loadData();
            },
              errorCode => this.userSearchList = errorCode
            );
        }
      });
  }

  getMessage(param: any) {
    this.message = `${DELETE_MESSAGE_DIALOG}` + param + ' ?';
    return this.message;
  }


}

