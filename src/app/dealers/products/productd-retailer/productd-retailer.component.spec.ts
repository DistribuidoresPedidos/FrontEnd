import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdRetailerComponent } from './productd-retailer.component';

describe('ProductdRetailerComponent', () => {
  let component: ProductdRetailerComponent;
  let fixture: ComponentFixture<ProductdRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
