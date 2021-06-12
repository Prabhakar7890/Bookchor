import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title = "Bookchor";
books:any;
  constructor(private bs:BooksService) { 
    this.bs.getBooks().subscribe(
      (data) => {
        this.books = data;
      }
    )
  }
  

  ngOnInit(): void { }

}
