import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSixAndSevenComponent } from './task-six-and-seven.component';

describe('TaskSixAndSevenComponent', () => {
  let component: TaskSixAndSevenComponent;
  let fixture: ComponentFixture<TaskSixAndSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskSixAndSevenComponent]
    });
    fixture = TestBed.createComponent(TaskSixAndSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
