import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskThreeComponent } from './task-three.component';

describe('TaskThreeComponent', () => {
  let component: TaskThreeComponent;
  let fixture: ComponentFixture<TaskThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskThreeComponent]
    });
    fixture = TestBed.createComponent(TaskThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
