import { ProductService } from './../../product/product.service';
import { TransactionService } from './../_service/transaction.service';
import { Autority, TransactionSaveTerm } from './../_model/transaction.model';
import { Message } from './../../apps/mail/message';
import { CustomValidators } from 'ng2-validation';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.scss'],
 })
export class TransactionCreateComponent implements OnInit {

  createForm: FormGroup;
  errorOnInit: any;
  responseOnSave: any;
  responseInvalid: any;
  baru: string;
  transaction: TransactionSaveTerm;
  invalid: boolean;
  successDialog: boolean;
  message: string;
  products: any;
  orderPrice: number;
  totalPrice: number;
  totalPriceProduct: number;
  quantity: number;
  productId: string;
  trxSave: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private transactionService: TransactionService
  ) {

    this.createForm = formBuilder.group({
      quantity: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      productId: [[], Validators.compose([Validators.required])],
      totalPrice: [''],
      totalPriceProduct: ['']

    });

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
   this.transactionService.getProduct()
   .subscribe((productMODEL) => {
      this.products = productMODEL.body;
      console.log(productMODEL);
      });
  }

  changeProduct(event: Event) {
    this.orderPrice = this.createForm.getRawValue().productId.price;
  }

  changeQuantity(event: Event) {
    this.totalPrice = this.createForm.getRawValue().quantity * this.orderPrice;
    this.totalPriceProduct = this.createForm.getRawValue().quantity * this.orderPrice;
  }


  save(evt: Event): void {
  this.trxSave = {
    totalPrice: this.totalPrice,
    status: 'CREATED',
    body: [
      {
        orderPrice: this.orderPrice,
        productId: this.createForm.getRawValue().productId.id,
        quantity: this.createForm.getRawValue().quantity,
        totalPrice: this.totalPriceProduct
      }
    ] };

  this.transactionService.postTrxSave({
       ...this.trxSave
    }).subscribe(
      success => {
        console.log('berhasil');
        this.message = 'Success';
        this.successDialog = true;
        this.router.navigate(['/transaction']);
      },
      error =>  {
        console.log('error');
      }
    );
  }


}

