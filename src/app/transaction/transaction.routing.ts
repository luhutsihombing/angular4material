
import { Routes } from '@angular/router';

import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { TransactionSearchComponent } from './transaction-search/transaction-search.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

export const TransactionRoutes: Routes = [
  {
    path: '',
    children: [
      {
      path: 'create',
      component: TransactionCreateComponent
     },
    {
      path: 'edit/:id',
      component: TransactionEditComponent
    },
     {
      path: '',
      component: TransactionSearchComponent
    },
    {
      path: 'history',
      component: TransactionHistoryComponent
    },
     {
      path: '',
      component: TransactionSearchComponent
    }
    // {
    //   path: 'delete/:id',
    //   component: TransactionDeleteComponent
    // }
  ]
  }
];
