import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) { }

    public confirm(title?: string, message?: string, param?: any, color?: string): Observable<boolean> {
        let dialogRef: MatDialogRef<ConfirmDialogComponent>;
        dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '450px'
        });
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.param = param;
        dialogRef.componentInstance.color = color;

        return dialogRef.afterClosed();
    }
}
