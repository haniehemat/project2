import { Injectable } from '@angular/core';
import { BookItem } from './book-page';

@Injectable({
  providedIn: 'root',
})
export class BookService {
   
   add(book:BookItem) {
    this.data.push(book)
    }

    list(){
      return[...this.data];
    }

    update(){}

    remove(){}

     private data: BookItem[] = [
      { id: 1, title: 'شب ها روشن', writer: 'داستایفسکی', publisher: 'وال', price: 114000 },
      { id: 2, title: 'مسخ', writer: 'فرانتس کافکا', publisher: 'نگاه', price: 137000 },
      { id: 3, title: 'بامداد خمار', writer: 'فتانه حاج سید جوادی', publisher: 'نگاه', price: 171000 },
    ]
}
