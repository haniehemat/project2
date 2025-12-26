import { Injectable } from '@angular/core';
import { memberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  add(members: memberItem) {
    this.data.push(members)
  }
  remove(member: memberItem) { this.data = this.data.filter(m => m.id != member.id); }
  update(member: memberItem) {
    const index = this.data.findIndex(b => b.id == member.id);
    if (index != -1) {
      this.data[index].name = member.name;
      this.data[index].family = member.family;
      this.data[index].cod = member.cod;
      this.data[index].age = member.age;

    }
  }
  list() {
    return [...this.data];
  }
  private data: memberItem[] = [
    { id: 1, name: 'هانیه', family: 'همت اسا', age: 19, cod: 123456 },
    { id: 2, name: 'محمدرضا', family: 'اکبری ', age: 15, cod: 357896 },
    { id: 3, name: 'آیناز', family: 'کهزادی', age: 19, cod: 987456 }
  ]
}