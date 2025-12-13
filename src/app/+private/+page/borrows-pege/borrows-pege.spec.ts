import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowsPege } from './borrows-pege';

describe('BorrowsPege', () => {
  let component: BorrowsPege;
  let fixture: ComponentFixture<BorrowsPege>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowsPege]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowsPege);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
