import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGetterComponent } from './number-getter.component';

describe('NumberGetterComponent', () => {
  let component: NumberGetterComponent;
  let fixture: ComponentFixture<NumberGetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberGetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
