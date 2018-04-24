import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule
} from '@angular/material';
import { ProductCategoryRoutes } from './product-category.routing';
import { ProductCategoryService } from './_services/product-category.service';
import { ProductCategorySearchComponent } from './product-category-search/product-category-search.component';
import { ProductCategoryCreateComponent } from './product-category-create/product-category-create.component';
import { ProductCategoryEditComponent } from './product-category-edit/product-category-edit.component';
import { AuthService } from '../auth/_service/auth.service';
import { DialogsService } from '../shared/dialogs/dialogs.service';
import { DialogsModule } from '../shared/dialogs/dialogs.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductCategoryRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatDialogModule,
    DialogsModule
  ],
  declarations: [
    ProductCategorySearchComponent,
    ProductCategoryCreateComponent,
    ProductCategoryEditComponent
  ],
  providers: [
    AuthService,
    ProductCategoryService,
    DialogsService   
  ]
})
export class ProductCategoryModule { }
