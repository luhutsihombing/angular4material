import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHistorySearchComponent } from './product-history-search.component';

describe('ProductHistorySearchComponent', () => {
  let component: ProductHistorySearchComponent;
  let fixture: ComponentFixture<ProductHistorySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHistorySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHistorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
