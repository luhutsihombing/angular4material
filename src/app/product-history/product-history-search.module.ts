import { ProductHistorySearchService } from './_service/product-history-search.service';
import { ProductHistorySearchComponent } from './product-history-search.component';
import { ProductHistorySearchRoutes } from './product-history-search.routing';
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
import { AuthService } from '../auth/_service/auth.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductHistorySearchRoutes),
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
    MatDialogModule
  ],
  declarations: [
    ProductHistorySearchComponent ],
  providers: [
    AuthService,
    ProductHistorySearchService
  ]
})
export class ProductHistorySearchModule { }
