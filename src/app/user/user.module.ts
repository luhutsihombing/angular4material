import { DialogsModule } from './../shared/dialogs/dialogs.module';
import { DialogsService } from './../shared/dialogs/dialogs.service';
import { MatDialogModule, MatChipsModule } from '@angular/material';
// import { UserDeleteComponent } from './user-delete/user-delete.component';
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
import { UserRoutes } from './user.routing';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { AuthService } from './../auth/_service/auth.service';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './_service/user.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
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
    UserCreateComponent,
    UserEditComponent,
    UserSearchComponent,
    UserViewComponent,
    // UserDeleteComponent,
  ],
  providers: [
    UserService,
    AuthService,
    DialogsService
  ]
})
export class UserModule {}
