import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book-service';
import { Book } from 'src/app/model/book';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public selectedBook: Book;
  public bookList: Book[];
  public checked: boolean;
  public allChecked: boolean;
  public removeBookList: Book[] = new Array();


  constructor(
    private bookService: BookService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.bookService.findAll().subscribe(response => {
      this.bookList = response.data;
      console.log(this.bookList);
    }, error => {
      console.log(error);
    });
  }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/book-details', this.selectedBook.id]);
  }

  updateRemoveBookList(checked: boolean, book: Book) {
    if (checked) {
      this.removeBookList.push(book);
    } else {
      this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
    }
  }

  updateSelected(checked: boolean) {
    if (checked) {
      this.allChecked = true;
      this.removeBookList = this.bookList.slice();
    } else {
      this.allChecked = false;
      this.removeBookList = [];
    }
  }

  removeSelectedBooks() {
    let dialogRef = this.dialog.open(DeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result == "yes") {
        for (let book of this.removeBookList) {
          this.bookService.delete(book.id).subscribe(response => {
          },
            error => {
            }
          );
        }
        location.reload();
      }
    }
    );
  }

  openDialog(book: Book) {
    let dialogRef = this.dialog.open(DeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result == "yes") {
        this.bookService.delete(book.id).subscribe(response => {
          this.getBookList();
        }, error => {
          console.log(error);
        }
        )
      }
    }
    );
  }

}



@Component({
  selector: 'delete-component',
  templateUrl: './delete-component.html'
})
export class DeleteDialog {

  constructor(public dialogRef: MatDialogRef<DeleteDialog>) { }
}
