import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPostComponent } from './social-post.component';

describe('SocialPostComponent', () => {
  let component: SocialPostComponent;
  let fixture: ComponentFixture<SocialPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialPostComponent]
    });
    fixture = TestBed.createComponent(SocialPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
