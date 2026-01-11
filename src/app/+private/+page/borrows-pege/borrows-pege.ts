import { Component, OnInit } from '@angular/core';
import { thing } from '../../../+shared/+base/base-thing';
import { BookItem } from '../book-page/book-page';
import { memberItem } from '../members-page/members-page';
import { BaseCRUDpage } from '../../../+shared/+base/base-page';

@Component({
  selector: 'app-borrows-pege',
  imports: [],
  templateUrl: './borrows-pege.html',
  styleUrl: './borrows-pege.scss',
})
export class BorrowsPege extends BaseCRUDpage<borrowsItem>implements OnInit {
  ngOnInit(): void {
  this.refreshData();
  }
}
export interface borrowsItem extends thing{
  borrowsDate:Date;
  returnDate?:Date;
  book:BookItem;
  member:memberItem;
}