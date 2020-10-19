
import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { PermissionGuard } from './guard/permission.guard';

export const appRoutes: Routes = [

    {
        path: 'book-save',
        loadChildren: () => import('./components/book/book.module').then(m => m.BookSaveModule),
        canActivate: [AuthGuard, PermissionGuard]
    },
    {
        path: 'book-update/:id',
        loadChildren: () => import('./components/book/book.module').then(m => m.BookUpdateModule),
        canActivate: [AuthGuard, PermissionGuard]
    },
    {
        path: 'book-details/:id',
        loadChildren: () => import('./components/book/book.module').then(m => m.BookDetailsModule),
        canActivate: [AuthGuard, PermissionGuard]
    },
    {
        path: 'book-list',
        loadChildren: () => import('./components/book/book.module').then(m => m.BookListModule),
        canActivate: [AuthGuard, PermissionGuard]
    },

    {
        path: 'login', component: LoginComponent
    },

    {
        path: '**', redirectTo: 'login'
    }
];
