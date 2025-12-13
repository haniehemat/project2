import { Injectable } from '@angular/core';
import { memberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
     add(members:memberItem) {
     this.data.push(members)
     }
     remove(){}
     update(){}
     list(){
      return [...this.data];
     }
    private data:memberItem[]=[
       {id:1,name:'هانیه',family:'همت اسا',age:19,cod:123456},
        {id:2,name:'محمدرضا',family:'اکبری ',age:15,cod:357896},
         {id:3,name:'آیناز',family:'کهزادی',age:19,cod:987456}
     ]
}