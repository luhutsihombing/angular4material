import { Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
export const ProductRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'index',
      component: ProductComponent
    },  {
      path: 'add',
      component: AddproductComponent
    },  {
      path: '',
      component: ProductComponent
    },{
      path: 'edit/:id',
      component: EditproductComponent
    }]
  }
];
