import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDpage } from '../../../+shared/+base/base-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';
import { BaseCrudComponent, column } from "../../../+shared/+base/base-crud-component/base-crud-component";
@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCRUDpage<memberItem> implements OnInit {
  override dataService = inject(MembersService);
  ngOnInit(): void {
    this.refreshData();
    this.item={
      name:'',
      family:'',
      age:0,
      cod:0
    }
  }
   override addPrepair(): void {
    this.item={
    name:'',
    family:'',
    age:0,
    cod:0
 };
  }
  columns: column[] = [
    { field: 'id', title: 'شناسه' },
    { field: 'name', title: 'نام' },
    { field: 'family', title: 'نام خانوادگی' },
    { field: 'age', title: 'سن' },
    { field: 'cod', title: 'کدملی' },
  ]
}
export interface memberItem extends thing {
  name: string;
  family: string;
  age: number;
  cod: number;
}