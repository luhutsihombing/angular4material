// import { UserDeleteComponent } from './user-delete/user-delete.component';
import { Routes } from '@angular/router';

import { UserEditComponent } from './user-edit/user-edit.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';

export const UserRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'create',
      component: UserCreateComponent
    },  {
      path: 'edit/:id',
      component: UserEditComponent
    },
     {
      path: '',
      component: UserSearchComponent
    },
      {
      path: ':id',
      component: UserViewComponent
    },
    // {
    //   path: 'delete/:id',
    //   component: UserDeleteComponent
    // }
  ]
  }
];
