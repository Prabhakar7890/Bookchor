import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id:any;
  record:any;
  constructor(private route:ActivatedRoute, private bs:BooksService) { 
    route.params.subscribe(params=>
        this.id=params['id']);
        this.bs.getBookDetails(this.id).subscribe(
          (data)=>this.record=data
        )
  }

  ngOnInit(): void {
  }

}
