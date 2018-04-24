import { ConfirmationComponent } from './confirmation.component';
import { Routes } from '@angular/router';

export const ConfirmationRouters: Routes = [
    {
        path: '',
        children: [
            {
                path: 'register/:id',
                component: ConfirmationComponent
            }
        ]
    }
];
