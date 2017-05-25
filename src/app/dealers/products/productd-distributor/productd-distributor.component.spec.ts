import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdDistributorComponent } from './productd-distributor.component';

describe('ProductdDistributorComponent', () => {
  let component: ProductdDistributorComponent;
  let fixture: ComponentFixture<ProductdDistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdDistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
