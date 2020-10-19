import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookDto } from 'src/app/dto/book.dto';
import { BookService } from 'src/app/service/book-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public book: Book;
  public dto: BookDto = new BookDto();
  public bookId: any;
  public path: any;

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.findById(this.bookId).subscribe(response => {
      this.book = response.data;
      this.dto = this.dto.details(this.book);
      this.path = "http://192.168.0.111:8081/"
      console.log(this.book);
    }, error => {
      console.log(this.book);
    });
  }

  onSelect(book: Book) {
    this.router.navigate(['/book-update', this.book.id]);
  }

}
