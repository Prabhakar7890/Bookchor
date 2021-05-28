import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookDetailsService {
  httpOptions:any;
  constructor(public http:HttpClient) { }

  getBookContent(id:any):observable<any>{
    return this.http.get("http://localhost:9090/books/"+id)
  }
  postData(obj:any):Observable<any>{
    this.httpOptions={
      headers : new HttpHeaders({
        'Content_Type' : "application/json"
      })
    }
    return this.http.post("http://localhost:9090/books/books",obj,this.httpOptions)
  }
}

