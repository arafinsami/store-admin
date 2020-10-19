

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookListRoutingModule, BookSaveRoutingModule, BookUpdateRoutingModule, BookDetailsRoutingModule } from './book.routing';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookService } from 'src/app/service/book-service';
import { BookSaveComponent } from './book-save/book-save.component';
import { httpInterceptorProviders } from 'src/app/interceptor/auth-interceptor';
import { BookUpdateComponent } from './book-update/book-update.component';
import { MaterialModule } from 'src/app/material/material';
import { UploadService } from 'src/app/service/uploa.service';

@NgModule({
    imports: [
        CommonModule,
        BookListRoutingModule,
        HttpClientModule,
        MaterialModule
    ],
    declarations: [BookListComponent],
    providers: [BookService, httpInterceptorProviders]
})
export class BookListModule { }


@NgModule({
    imports: [
        CommonModule,
        BookSaveRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [BookSaveComponent],
    providers: [
        BookService,
        UploadService,
        httpInterceptorProviders
    ]
})
export class BookSaveModule { }

@NgModule({
    imports: [
        CommonModule,
        BookUpdateRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [BookUpdateComponent],
    providers: [
        BookService,
        UploadService,
        httpInterceptorProviders
    ]
})
export class BookUpdateModule { }

@NgModule({
    imports: [
        CommonModule,
        BookDetailsRoutingModule,
        HttpClientModule,
        MaterialModule
    ],
    declarations: [BookDetailsComponent],
    providers: [
        BookService,
        httpInterceptorProviders
    ]
})
export class BookDetailsModule { }
