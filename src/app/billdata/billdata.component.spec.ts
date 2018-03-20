import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilldataComponent } from './billdata.component';

describe('BilldataComponent', () => {
  let component: BilldataComponent;
  let fixture: ComponentFixture<BilldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
