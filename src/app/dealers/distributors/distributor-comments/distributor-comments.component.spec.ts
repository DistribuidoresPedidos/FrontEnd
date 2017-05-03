import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorCommentsComponent } from './distributor-comments.component';

describe('DistributorCommentsComponent', () => {
  let component: DistributorCommentsComponent;
  let fixture: ComponentFixture<DistributorCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
