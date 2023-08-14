import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8080/allBooks"

  private getBookByIDURL = "http://localhost:8080/bookById"

  private updateBookURL = "http://localhost:8080/updateBook"

  private deleteBookURL = "http://localhost:8080/deleteBook"
  

  constructor(private httpClient: HttpClient) { }

  getBook(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
 }

 addBook(book: Book): Observable<Object>{
  //return this.httpClient.post(`${this.addBookURL}` + book);
  return this.httpClient.post(`http://localhost:8080/addBook/`, book);
 }

 getBookById(id: number): Observable<Book>{
  return this.httpClient.get<Book>(`${this.getBookByIDURL}/${id}`);
 }
 updateBook(id:number, book: Book): Observable<Object>{
  return this.httpClient.put(`${this.updateBookURL}/${id}`, book);
 }

 deleteBookById(id:number): Observable<Object>{
  return this.httpClient.delete(`${this.deleteBookURL}/${id}`)
 }
}
