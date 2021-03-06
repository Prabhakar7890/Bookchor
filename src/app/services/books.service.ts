import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  

  constructor(private http:HttpClient) { }

  getBooks():Observable<object>
  {
    return this.http.get("http://localhost:9090/books");
  }

  getBookDetails(id:any):Observable<object>
  {
    return this.http.get("http://localhost:9090/books/"+id);
  }

}
