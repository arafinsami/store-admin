import { Book } from '../model/book';
import { DatePipe } from '@angular/common';
import { DATE_FORMAT } from '../constant/constants';


export class BookDto {

    id: number;

    title: string;

    author: string;

    publisher: string;

    publicationDate: string;

    language: string;

    category: string;

    pages: number;

    format: string;

    isbn: string;

    shippingWeight: number;

    listPrice: number;

    ourPrice: number;

    active: boolean;

    stockNumber: number;

    photo: string;

    description: string;

    public to(book: Book): BookDto {

        const dto = new BookDto();
        dto.title = book.title;
        dto.author = book.author;
        dto.publisher = book.publisher;
        dto.publicationDate = book.publicationDate;
        dto.language = book.language;
        dto.category = book.category;
        dto.pages = book.pages;
        dto.format = book.format;
        dto.isbn = book.isbn;
        dto.shippingWeight = book.shippingWeight;
        dto.listPrice = book.listPrice;
        dto.ourPrice = book.ourPrice;
        dto.active = book.active;
        dto.stockNumber = book.stockNumber;
        dto.description = book.description;
        return dto;
    }

    public from(book: Book): BookDto {

        const dto = new BookDto();
        dto.id = book.id;
        dto.title = book.title;
        dto.author = book.author;
        dto.publisher = book.publisher;
        dto.publicationDate = book.publicationDate;
        dto.language = book.language;
        dto.category = book.category;
        dto.pages = book.pages;
        dto.format = book.format;
        dto.isbn = book.isbn;
        dto.shippingWeight = book.shippingWeight;
        dto.listPrice = book.listPrice;
        dto.ourPrice = book.ourPrice;
        dto.active = book.active;
        dto.stockNumber = book.stockNumber;
        dto.description = book.description;
        return dto;
    }

    public details(book: Book): BookDto {

        const dto = new BookDto();
        dto.id = book.id;
        dto.title = book.title;
        dto.author = book.author;
        dto.publisher = book.publisher;
        dto.publicationDate = book.publicationDate;
        dto.language = book.language;
        dto.category = book.category;
        dto.pages = book.pages;
        dto.format = book.format;
        dto.isbn = book.isbn;
        dto.shippingWeight = book.shippingWeight;
        dto.listPrice = book.listPrice;
        dto.ourPrice = book.ourPrice;
        dto.active = book.active;
        dto.stockNumber = book.stockNumber;
        dto.photo = book.photo;
        dto.description = book.description;
        return dto;
    }
}