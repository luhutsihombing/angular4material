import { Routes } from '@angular/router';
import { ProductCategorySearchComponent } from './product-category-search/product-category-search.component';
import { ProductCategoryCreateComponent } from './product-category-create/product-category-create.component';
import { ProductCategoryEditComponent } from './product-category-edit/product-category-edit.component';

export const ProductCategoryRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProductCategorySearchComponent
            },
            {
                path: 'create',
                component: ProductCategoryCreateComponent
            },
            {
                path: 'edit/:id',
                component: ProductCategoryEditComponent
            }
        ]
    }
];
