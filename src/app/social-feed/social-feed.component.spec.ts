import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFeedComponent } from './social-feed.component';

describe('SocialFeedComponent', () => {
  let component: SocialFeedComponent;
  let fixture: ComponentFixture<SocialFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialFeedComponent]
    });
    fixture = TestBed.createComponent(SocialFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
