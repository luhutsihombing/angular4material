import { TestBed, inject } from '@angular/core/testing';
import { ProductHistorySearchService } from './product-history-search.service';


describe('ProductHistorySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductHistorySearchService]
    });
  });

  it('should be created', inject([ProductHistorySearchService], (service: ProductHistorySearchService) => {
    expect(service).toBeTruthy();
  }));
});
