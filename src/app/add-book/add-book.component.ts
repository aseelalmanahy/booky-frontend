import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


  book: Book = new Book();
  constructor(private bookService: BookService, private router:Router)  { }

  ngOnInit(): void {
  }

  AddNewBook(){
    this.bookService.addBook(this.book).subscribe(data =>{
      console.log(data);
      this.goToBookList();
      
    });
    (error:any) => console.error(error);
    
  }
  goToBookList(){
    (<any>this.router).navigate(['/books']);
  }

  onSubmit() {
    console.log(this.book);
    this.AddNewBook();
  }

}
