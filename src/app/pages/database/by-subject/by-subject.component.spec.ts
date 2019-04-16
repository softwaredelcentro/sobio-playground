import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BySubjectComponent } from './by-subject.component';

describe('BySubjectComponent', () => {
  let component: BySubjectComponent;
  let fixture: ComponentFixture<BySubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
