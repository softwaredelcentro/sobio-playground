import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyT2tComponent } from './verify-t2t.component';

describe('VerifyT2tComponent', () => {
  let component: VerifyT2tComponent;
  let fixture: ComponentFixture<VerifyT2tComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyT2tComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyT2tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
