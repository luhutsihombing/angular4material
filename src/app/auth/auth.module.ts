import { AdminLayoutComponent } from './../core/admin-layout/admin-layout.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { AuthService } from './_service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthRoutes } from './auth.routing';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule],
    declarations: [LoginComponent],
  providers: [
    AuthService
  ]
})
export class AuthModule {}


