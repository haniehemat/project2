import { BaseCRUDService } from "./base-service";
import { thing } from "./base-thing";

export class BaseCRUDpage<T extends thing> {
    dataService!: BaseCRUDService<T>;
    remove(i: T) {
        this.item = { ...i }
        this.action = 'remove';
    }
    edit(i: T) {
        this.item = { ...i };
        this.action = 'edit';
    }
    save() {
        if (this.action == 'add') {
            this.dataService.add(this.item);
        }
        else if (this.action == 'edit') {
            this.dataService.update(this.item);
        }
        else if (this.action == 'remove') {
            this.dataService.remove(this.item);
        }
        this.refreshData();
        this.action = 'list';
    }
    item!: T;
    cancel() {
        this.action = 'list';
    }
    add() {
       this.addPrepair();
        this.action = 'add';
        // this.data.push({id:6,title:'test',writer:'test',publisher:'test',price:100})
    }
  addPrepair(){

  }
    data: T[] = [];
    action: string = 'list';
    refreshData() { this.data = this.dataService.list() }
}
export interface BookItem extends thing {
    title: string;
    writer: string;
    publisher: string;
    price: number;
}
