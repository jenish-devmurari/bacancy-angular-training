import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskThreeAndFourChildComponent } from './task-three-and-four-child.component';

describe('TaskThreeAndFourChildComponent', () => {
  let component: TaskThreeAndFourChildComponent;
  let fixture: ComponentFixture<TaskThreeAndFourChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskThreeAndFourChildComponent]
    });
    fixture = TestBed.createComponent(TaskThreeAndFourChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
