import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChildComponent } from './task-child.component';

describe('TaskChildComponent', () => {
  let component: TaskChildComponent;
  let fixture: ComponentFixture<TaskChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskChildComponent]
    });
    fixture = TestBed.createComponent(TaskChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
