import { PAGING_PAGESIZE, PAGING_PAGESIZEOPTIONS } from './../../_const/properties.const';
import { MatTableDataSource } from '@angular/material';
import { ProductService } from './../../product/product.service';
import { TransactionService } from './../_service/transaction.service';
import { Transaction, TransactionDetail } from './../_model/transaction.model';
import { Message } from './../../apps/mail/message';
import { CustomValidators } from 'ng2-validation';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss'],
 })
export class TransactionViewComponent implements OnInit {

  editForm: FormGroup;
  errorOnInit: any;
  transaction: any;
  invalid: boolean;
  isSaved: boolean;
  successDialog: boolean;
  id: number;
  fleetData = null;
  dataSource = new MatTableDataSource<Transaction>();
  pageSize: number = PAGING_PAGESIZE;
  pageSizeOptions: number[] = PAGING_PAGESIZEOPTIONS;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private transactionService: TransactionService
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.transactionService.getTransactionDetails(this.id)
      .subscribe(trans => {
        this.transaction = trans.body[0];
        console.log('di VIEW'),
        console.log(this.transaction);
      },
        error => (this.errorOnInit = error)
      );

  }

}

