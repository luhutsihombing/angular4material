import { AuthService } from './../../auth/_service/auth.service';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule],
    declarations: [],
  providers: [
    AuthService
  ]
})
export class AuthModule {}


