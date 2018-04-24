import { TransactionService } from './transaction.service';
import { TestBed, inject } from '@angular/core/testing';


describe('TransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionService]
    });
  });

  it(
    'should be created',
    inject([TransactionService], (service: TransactionService) => {
      expect(service).toBeTruthy();
    })
  );
});
