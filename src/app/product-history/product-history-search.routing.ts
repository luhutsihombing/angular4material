import { ProductComponent } from './../product/product.component';
import { Routes } from '@angular/router';

import { ProductHistorySearchComponent } from './product-history-search.component';

export const ProductHistorySearchRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: ProductHistorySearchComponent
    }]
  }
];
