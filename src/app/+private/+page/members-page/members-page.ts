import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage implements OnInit {
save() {
this.membersService.add(this.item);
this.refreshData();
this.action='list';
}
item:memberItem={
  id: 0,
  name: '',
  family: '',
  age: 0,
  cod: 0
};
cancel() {
  this.action='list';
}
  action:string='list';
  ngOnInit(): void {
   this.refreshData();
  }
 membersService=inject(MembersService)
add() {
  this.action='add';
//this.refreshData();
}
data:memberItem[]=[];
 refreshData(){
  this.data=this.membersService.list();
 }

}
export interface memberItem{
  id:number;
  name:string;
  family:string;
  age:number;
  cod:number;
}