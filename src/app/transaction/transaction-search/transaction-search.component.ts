import { Transaction } from './../_model/transaction.model';
import { TransactionService } from './../_service/transaction.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PAGING_PAGESIZEOPTIONS, DELETE_TITLE_DIALOG, DELETE_MESSAGE_DIALOG, PAGING_PAGESIZE } from './../../_const/properties.const';
import { DialogsService } from './../../shared/dialogs/dialogs.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
  styleUrls: ['./transaction-search.component.scss'],
 })
export class TransactionSearchComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'userId', 'orderDate', 'totalPrice', 'status', 'actions'];
  fleetData = null;
  dataSource = new MatTableDataSource<Transaction>();
  pageSize: number = PAGING_PAGESIZE;
  pageSizeOptions: number[] = PAGING_PAGESIZEOPTIONS;

  title: string ;
  message: string;
  color: string;

  result: any;

  transaction: Transaction[];

  transactionSearchList: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private transactionService: TransactionService,
    private dialogsService: DialogsService,
  ) {
  this.title = `${DELETE_TITLE_DIALOG}`;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.transactionService.getTransactionList().subscribe(
      transactionSearchList => {
        this.transaction = transactionSearchList.body;
        this.fleetData = transactionSearchList.body;
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


  public showDialog(transaction: Transaction) {
    this.dialogsService.confirm(this.title, this.getMessage('this transaction'), transaction, this.color = 'warn')
      .subscribe(res => {
        this.result = res;
        if (res) {
          this.transactionService.deleteTransaction(this.result.id)
            .subscribe(successCode => {
              this.loadData();
            },
              error => console.error());
        }
      });
  }

  getMessage(param: any) {
    this.message = `${DELETE_MESSAGE_DIALOG}` + param + ' ?';
    return this.message;
  }



}

