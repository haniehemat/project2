import { Injectable } from '@angular/core';
import { BaseCRUDService } from '../../../+shared/+base/base-service';
import { borrowsItem } from './borrows-pege';

@Injectable({
  providedIn: 'root',
})
export class BorrowsService extends BaseCRUDService<borrowsItem> {
}
