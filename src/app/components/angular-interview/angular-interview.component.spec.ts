import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInterviewComponent } from './angular-interview.component';

describe('AngularInterviewComponent', () => {
  let component: AngularInterviewComponent;
  let fixture: ComponentFixture<AngularInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
