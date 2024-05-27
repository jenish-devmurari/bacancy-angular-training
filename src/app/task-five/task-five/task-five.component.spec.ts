import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFiveComponent } from './task-five.component';

describe('TaskFiveComponent', () => {
  let component: TaskFiveComponent;
  let fixture: ComponentFixture<TaskFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFiveComponent]
    });
    fixture = TestBed.createComponent(TaskFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
