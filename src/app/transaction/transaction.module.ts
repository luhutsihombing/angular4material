import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { DialogsModule } from './../shared/dialogs/dialogs.module';
import { DialogsService } from './../shared/dialogs/dialogs.service';
import { MatDialogModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
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
   MatCheckboxModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule} from '@angular/material';
import { TransactionRoutes } from './transaction.routing';
import { CommonModule } from '@angular/common';
import { AuthService } from './../auth/_service/auth.service';
import { TransactionSearchComponent } from './transaction-search/transaction-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionService } from './_service/transaction.service';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TransactionRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDialogModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DialogsModule,
    ReactiveFormsModule,
    NgxDatatableModule],
  declarations: [
    TransactionCreateComponent,
    TransactionEditComponent,
    TransactionSearchComponent,
    TransactionViewComponent,
    TransactionHistoryComponent
  ],
  providers: [
    TransactionService,
    AuthService,
    DialogsService
  ]
})
export class TransactionModule {}
