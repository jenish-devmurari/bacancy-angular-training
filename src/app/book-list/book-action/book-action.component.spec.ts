import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookActionComponent } from './book-action.component';

describe('BookActionComponent', () => {
  let component: BookActionComponent;
  let fixture: ComponentFixture<BookActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookActionComponent]
    });
    fixture = TestBed.createComponent(BookActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
