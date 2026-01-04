import { Component, Inject, inject, OnInit } from '@angular/core';
import { BookService } from './book-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDpage } from '../../../+shared/+base/base-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';
@Component({
  selector: 'app-book-page',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './book-page.html',
  styleUrl: './book-page.scss',
})
export class BookPage extends BaseCRUDpage<BookItem> implements OnInit {
  override dataService = inject(BookService);
  ngOnInit(): void {
    this.refreshData();
  }
  override addPrepair(): void {
    this.item = {
      publisher: '',
      title: '',
      writer: '',
    };
  }
}
export interface BookItem extends thing {
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
