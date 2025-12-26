import { Component, inject, OnInit } from '@angular/core';
import { BookService } from './book-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-book-page',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './book-page.html',
  styleUrl: './book-page.scss',
})
export class BookPage implements OnInit {
  remove(book: BookItem) {
    this.item = { ...book }
    this.action = 'remove';
  }
  edit(book: BookItem) {
    this.item = { ...book };
    this.action = 'edit';
  }
  save() {
    if (this.action == 'add') {
      this.bookService.add(this.item);
    }
    else if (this.action == 'edit') {
      this.bookService.update(this.item);
    }
    else if (this.action == 'remove') {
      this.bookService.remove(this.item);
    }
    this.refreshData();
    this.action = 'list';
  }
  item: BookItem = {
    id: 0,
    title: '',
    writer: '',
    publisher: '',
    price: 0
  }
  cancel() {
    this.action = 'list';
  }
  ngOnInit(): void {
    this.refreshData();
  }
  bookService = inject(BookService)
  add() {
    this.item = {
      id: 0,
      title: '',
      writer: '',
      publisher: '',
      price: 0
    };
    this.action = 'add';
    // this.data.push({id:6,title:'test',writer:'test',publisher:'test',price:100})
  }
  data: BookItem[] = [];
  action: string = 'list';
  refreshData() { this.data = this.bookService.list() }
}
export interface BookItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
