import { Injectable } from '@angular/core';
import { memberItem } from './members-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseCRUDService<memberItem> {
  override data: memberItem[] = [
    { id: 1, name: 'هانیه', family: 'همت اسا', age: 19, cod: 123456 },
    { id: 2, name: 'محمدرضا', family: 'اکبری ', age: 15, cod: 357896 },
    { id: 3, name: 'آیناز', family: 'کهزادی', age: 19, cod: 987456 }
  ];
  override edit(destination: memberItem, source: memberItem): void {
    destination.age=source.age;
    destination.cod=source.cod;
    destination.family=source.family;
    destination.name=source.name;
  }
}