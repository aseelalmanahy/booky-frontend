import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'app/book';
import { BookService } from 'app/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book: Book = new Book();
  id!: number;
  constructor(private bookService: BookService, private activityRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activityRoute.snapshot.params['id'];

    this.bookService.getBookById(this.id).subscribe(data=>{
      this.book = data;
    }, error => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }

  onSubmit() {
    //console.log();
    this.bookService.updateBook(this.id, this.book).subscribe(data =>{
    this.goToBookList();
    }, error => console.log(error));
  }
}
