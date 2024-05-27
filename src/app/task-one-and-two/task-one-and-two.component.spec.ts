import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOneAndTwoComponent } from './task-one-and-two.component';

describe('TaskOneAndTwoComponent', () => {
  let component: TaskOneAndTwoComponent;
  let fixture: ComponentFixture<TaskOneAndTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskOneAndTwoComponent]
    });
    fixture = TestBed.createComponent(TaskOneAndTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
