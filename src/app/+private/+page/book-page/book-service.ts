import { Injectable } from '@angular/core';
import { BookItem } from './book-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BookService extends BaseCRUDService<BookItem> {
  override data: BookItem[] = [
    { id: 1, title: 'شب ها روشن', writer: 'داستایفسکی', publisher: 'وال', price: 114000 },
    { id: 2, title: 'مسخ', writer: 'فرانتس کافکا', publisher: 'نگاه', price: 137000 },
    { id: 3, title: 'بامداد خمار', writer: 'فتانه حاج سید جوادی', publisher: 'نگاه', price: 171000 },
  ];
  override edit(destination: BookItem, source: BookItem): void {
    destination.price=source.price;
    destination.publisher=source.publisher;
    destination.title=source.title;
    destination.writer=source.writer;
  }
}
