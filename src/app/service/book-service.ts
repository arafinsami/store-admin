import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookDto } from '../dto/book.dto';
import { Observable } from 'rxjs';
import { BASE_URL, SAVE_URL, UPDATE_URL, LIST_URL } from '../constant/base-url';

@Injectable()
export class BookService {

    constructor(private http: HttpClient) {
    }


    public save(dto: BookDto): Observable<any> {
        return this.http.post(BASE_URL + SAVE_URL, dto);
    }

    public update(dto: BookDto): Observable<any> {
        return this.http.put(BASE_URL + UPDATE_URL, dto);
    }

    public findById(bookId: any): Observable<any> {
        return this.http.get(BASE_URL + 'book/details/' + bookId);
    }

    public findAll(): Observable<any> {
        return this.http.get(BASE_URL + LIST_URL);
    }

    public delete(bookId: any): Observable<any> {
        return this.http.delete(BASE_URL + 'book/delete/' + bookId);
    }
}