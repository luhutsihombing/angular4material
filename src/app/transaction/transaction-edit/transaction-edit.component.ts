import { PAGING_PAGESIZEOPTIONS } from './../../_const/properties.const';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ProductService } from './../../product/product.service';
import { TransactionService } from './../_service/transaction.service';
import { Transaction, TransactionDetail, TransactionList, Dummy, Status } from './../_model/transaction.model';
import { Message } from './../../apps/mail/message';
import { CustomValidators } from 'ng2-validation';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { PAGING_PAGESIZE } from '../../_const/properties.const';


@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.scss'],
 })
export class TransactionEditComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'orderPrice', 'productId', 'quantity', 'totalPrice'];
  fleetData = null;
  dataSource = new MatTableDataSource<Transaction>();
  pageSize: number = PAGING_PAGESIZE;
  pageSizeOptions: number[] = PAGING_PAGESIZEOPTIONS;

  transactionList: TransactionList[];

  editForm: FormGroup;
  errorOnInit: any;
  transaction: Dummy;
  invalid: boolean;
  isSaved: boolean;
  successDialog: boolean;
  id: number;
  status: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private transactionService: TransactionService
  ) {

    this.editForm = formBuilder.group({
      status: ['' , Validators.compose([Validators.required])]
    });

}



  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadData() {

    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.transactionService.getTransactionDetails(this.id)
      .subscribe(trans => {
        (this.transaction = trans),
        this.transactionList = trans.body[0].details.body,
        this.editForm.patchValue(this.transaction),
        this.status = this.transaction.body[0].status;
        this.fleetData = this.transactionList;
        this.dataSource.data = this.fleetData;
      },
        error => (this.errorOnInit = error)
      );
    }


  save(evt: Event): void {
console.log('masuk');
    const {
      ...UpdateTerm
    } = this.transaction;


    this.transactionService.putTransactionUpdate({
       ...UpdateTerm,
      body: this.transactionList,
      id: this.transaction.body[0].id,
      status: this.editForm.getRawValue().status,
      orderDate: this.transaction.body[0].orderDate,
      totalPrice: this.transaction.body[0].totalPrice,
      }).subscribe(
      success => {
        console.log('berhasil');
        this.router.navigate(['/transaction']);
      },
      error => {
        console.error();
      }
    );
  }
}

