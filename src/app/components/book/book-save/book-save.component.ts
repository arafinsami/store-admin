import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookDto } from 'src/app/dto/book.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/service/book-service';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/service/uploa.service';

@Component({
  selector: 'app-book-save',
  templateUrl: './book-save.component.html',
  styleUrls: ['./book-save.component.css']
})
export class BookSaveComponent implements OnInit {

  public book: Book;
  public dto: BookDto = new BookDto();
  public bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private route: Router,
    public uploadService: UploadService
  ) { }

  ngOnInit() {
    this.formInit();
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
      this.dto = this.dto.to(this.book);
      this.bookService.save(this.dto).subscribe(response => {
        this.uploadService.upload(JSON.parse(JSON.parse(JSON.stringify(response.data.id))));
        this.bookForm.reset();
        this.route.navigateByUrl('/book-list');
      }, error => {
        console.log(this.dto);
      });
    }
  }


}
