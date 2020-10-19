

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSaveComponent } from './book-save/book-save.component';

const routesList: Routes = [
    { path: '', component: BookListComponent }
];

const routesCreate: Routes = [
    { path: '', component: BookSaveComponent }
];

const routesEdit: Routes = [
    { path: '', component: BookUpdateComponent }
];

const routesDetails: Routes = [
    { path: '', component: BookDetailsComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routesList)]
})
export class BookListRoutingModule { }


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routesCreate)]
})
export class BookSaveRoutingModule { }

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routesEdit)]
})
export class BookUpdateRoutingModule { }

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routesDetails)]
})
export class BookDetailsRoutingModule { }
