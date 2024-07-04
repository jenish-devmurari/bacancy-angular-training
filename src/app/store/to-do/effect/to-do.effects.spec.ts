import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ToDoEffects } from './to-do.effects';

describe('ToDoEffects', () => {
  let actions$: Observable<any>;
  let effects: ToDoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToDoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ToDoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
