import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskThreeAndFourComponent } from './task-three-and-four.component';

describe('TaskThreeAndFourComponent', () => {
  let component: TaskThreeAndFourComponent;
  let fixture: ComponentFixture<TaskThreeAndFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskThreeAndFourComponent]
    });
    fixture = TestBed.createComponent(TaskThreeAndFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
