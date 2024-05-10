import { TestBed } from '@angular/core/testing';

import { GlobalErrorInterceptor } from './global-error.interceptor';

describe('GlobalErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GlobalErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GlobalErrorInterceptor = TestBed.inject(GlobalErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
