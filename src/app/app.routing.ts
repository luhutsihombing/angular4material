import { LoginComponent } from './auth/login/login.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './auth/_guard/auth.guard';
import { AdminLayoutComponent, AuthLayoutComponent } from './core';


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'confirmation',
    loadChildren: './confirmation/confirmation.module#ConfirmationModule'
  },

  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'apps',
        loadChildren: './apps/apps.module#AppsModule'
      },
       {
            path: 'widgets',
            loadChildren: './widgets/widgets.module#WidgetsModule'
          }, {
            path: 'material',
            loadChildren: './material/material.module#MaterialComponentsModule'
          }, {
            path: 'ecommerce',
            loadChildren: './ecommerce/ecommerce.module#EcommerceModule'
          }, {
            path: 'taskboard',
            loadChildren: './taskboard/taskboard.module#TaskboardModule'
          }, {
            path: 'forms',
            loadChildren: './forms/forms.module#FormModule'
          }, {
            path: 'tables',
            loadChildren: './tables/tables.module#TablesModule'
          }, {
            path: 'charts',
            loadChildren: './chartlib/chartlib.module#ChartlibModule'
          },
          {
            path: 'maps',
            loadChildren: './maps/maps.module#MapModule'
          },
           {
            path: 'dragndrop',
            loadChildren: './dragndrop/dragndrop.module#DragndropModule'
          },
           {
            path: 'product',
            loadChildren: './product/product.module#ProductModule',
            canActivate: [AuthGuard]
          },
          {
            path: 'profile',
            loadChildren: './profile/profile.module#ProfileModule',
            canActivate: [AuthGuard]
          },
          {
            path: 'productCategory',
            loadChildren: './product-category/product-category.module#ProductCategoryModule',
            canActivate: [AuthGuard]
          },
          {
            path: 'productHistory',
            loadChildren: './product-history/product-history-search.module#ProductHistorySearchModule',
            canActivate: [AuthGuard]
          },
          {
            path: 'user',
            loadChildren: './user/user.module#UserModule',
            canActivate: [AuthGuard]
          },
          {
            path: 'transaction',
            loadChildren: './transaction/transaction.module#TransactionModule',
            canActivate: [AuthGuard]
          },
          {
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
          }
    ]
  }

 ];





