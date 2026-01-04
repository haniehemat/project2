import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDpage } from '../../../+shared/+base/base-page';
import { BaseCRUDService } from '../../../+shared/+base/base-service';
@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCRUDpage<memberItem> implements OnInit {
  override dataService = inject(MembersService);
  ngOnInit(): void {
    this.refreshData();
  }
}
export interface memberItem extends thing {
  name: string;
  family: string;
  age: number;
  cod: number;
}