import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategorySearchComponent } from './product-category-search.component';

describe('ProductCategorySearchComponent', () => {
  let component: ProductCategorySearchComponent;
  let fixture: ComponentFixture<ProductCategorySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategorySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
