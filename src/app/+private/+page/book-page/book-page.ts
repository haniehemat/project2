import { Component, Inject, inject, OnInit } from '@angular/core';
import { BookService } from './book-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDpage } from '../../../+shared/+base/base-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';
import { BaseCrudComponent, column } from "../../../+shared/+base/base-crud-component/base-crud-component";
@Component({
  selector: 'app-book-page',
  imports: [FormsModule, DecimalPipe, BaseCrudComponent],
  templateUrl: './book-page.html',
  styleUrl: './book-page.scss',
})
export class BookPage extends BaseCRUDpage<BookItem> implements OnInit {
  override dataService = inject(BookService);
  ngOnInit(): void {
    this.refreshData();
    // this.item={
    //   publisher:'',
    //   title:'',
    //   writer:''
    // }
  }
  override addPrepair(): void {
    // this.item = {
    //   publisher: '',
    //   title: '',
    //   writer: '',
  };
  columns: column[] = [
    { field: 'id', title: 'شناسه' },
    { field: 'title', title: 'عنوان' },
    { field: 'writer', title: 'نویسنده' },
    { field: 'publisher', title: 'ناشر' },
    { field: 'price', title: 'قیمت' }
  ];
}
export interface BookItem extends thing {
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
