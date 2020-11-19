import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionShowerComponent } from './question-shower.component';

describe('QuestionShowerComponent', () => {
  let component: QuestionShowerComponent;
  let fixture: ComponentFixture<QuestionShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionShowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
