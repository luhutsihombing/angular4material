import { Component, OnInit } from '@angular/core';
import { ProductCategory, ProductCategoryResponse } from '../_models/product-category';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductCategoryService } from '../_services/product-category.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-category-create',
  templateUrl: './product-category-create.component.html',
  styleUrls: ['./product-category-create.component.scss']
})
export class ProductCategoryCreateComponent implements OnInit {

  productCategory: ProductCategory;
  prodCatForm: any;
  statusCode: ProductCategoryResponse;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private prodCategoryService: ProductCategoryService,
    private formBuilder: FormBuilder
  ) {
    this.prodCatForm = this.formBuilder.group({
      'code': ['', Validators.required],
      'name': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.prodCatForm.valid) {
      this.productCategory = this.prodCatForm.value;
      this.prodCategoryService.createProductCategory(this.productCategory)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.router.navigate(['/productCategory']);
        },
          errorCode => this.statusCode = errorCode
        );
    }
  }

}
