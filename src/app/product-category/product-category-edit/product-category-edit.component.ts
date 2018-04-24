import { Component, OnInit } from '@angular/core';
import { ProductCategory, ProductCategoryResponse } from '../_models/product-category';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductCategoryService } from '../_services/product-category.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-category-edit',
  templateUrl: './product-category-edit.component.html',
  styleUrls: ['./product-category-edit.component.scss']
})
export class ProductCategoryEditComponent implements OnInit {

  _id: string;
  statusCode: ProductCategoryResponse;
  productCategory: ProductCategory;
  prodCatForm: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private prodCategoryService: ProductCategoryService,
    private formBuilder: FormBuilder
  ) {
    this.prodCatForm = this.formBuilder.group({
      id: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('id');
    this.getCategoryProductDetail(this._id);
  }

  getCategoryProductDetail(id) {
    this.prodCategoryService.getProductCategoryById(id)
      .subscribe(data => {
        this.prodCatForm.patchValue(data.body[0]);
      },
        errorCode => this.statusCode = errorCode);
  }

  onFormSubmit() {
    if (this.prodCatForm.valid) {
      this.productCategory = this.prodCatForm.value;
      this.prodCategoryService.updateProductCategory(this.productCategory)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.router.navigate(['/productCategory']);
        },
          errorCode => this.statusCode = errorCode);
    }
  }

}
