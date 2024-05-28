import { TestBed } from '@angular/core/testing';

import { ProductTwoService } from './product-two.service';

describe('ProductTwoService', () => {
  let service: ProductTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
