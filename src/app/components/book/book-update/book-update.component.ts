import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookDto } from 'src/app/dto/book.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/service/book-service';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/service/uploa.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  public book: Book;
  public dto: BookDto = new BookDto();
  public bookForm: FormGroup;
  public bookId: any;

  constructor(
    private bookService: BookService,
    public uploadService: UploadService,
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getById();
    this.formInit();
  }

  getById() {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.findById(this.bookId).subscribe(response => {
      this.book = response.data;
      this.bookForm.reset(this.dto.from(this.book));
    }, error => {
      console.log(this.book);
    });
  }

  formInit() {
    this.bookForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      publicationDate: [''],
      language: ['', [Validators.required]],
      category: ['', [Validators.required]],
      pages: ['', [Validators.required]],
      format: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      shippingWeight: ['', [Validators.required]],
      listPrice: ['', [Validators.required]],
      ourPrice: ['', [Validators.required]],
      active: [''],
      stockNumber: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }


  onSubmit() {
    if (this.bookForm.valid) {
      this.book = Object.assign({}, this.bookForm.value);
      this.dto = this.dto.from(this.book);
      this.bookService.update(this.dto).subscribe(response => {
        this.uploadService.modify(JSON.parse(JSON.parse(JSON.stringify(response.data.id))));
        this.bookForm.reset();
        this.route.navigateByUrl('/book-list');
      }, error => {
        console.log(this.dto);
      });
    }
  }

}
