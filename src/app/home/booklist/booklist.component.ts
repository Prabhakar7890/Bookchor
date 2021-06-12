import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  @Input() book:any;
  constructor() { }

  ngOnInit(): void {
  }

}
