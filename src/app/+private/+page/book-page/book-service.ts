import { Injectable } from '@angular/core';
import { BookItem } from './book-page';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  add(book: BookItem) {
    this.data.push(book)
  }

  list() {
    return [...this.data];
  }

  update(book: BookItem) {
    const index = this.data.findIndex(b => b.id == book.id);
    if (index != -1) {
      this.data[index].title = book.title;
      this.data[index].writer = book.writer;
      this.data[index].publisher = book.publisher;
      this.data[index].price = book.price;
    }
  }


  remove(book: BookItem) {
    this.data = this.data.filter(m => m.id != book.id);
  }

  private data: BookItem[] = [
    { id: 1, title: 'شب ها روشن', writer: 'داستایفسکی', publisher: 'وال', price: 114000 },
    { id: 2, title: 'مسخ', writer: 'فرانتس کافکا', publisher: 'نگاه', price: 137000 },
    { id: 3, title: 'بامداد خمار', writer: 'فتانه حاج سید جوادی', publisher: 'نگاه', price: 171000 },
  ]
}
