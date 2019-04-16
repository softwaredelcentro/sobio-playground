import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DniArComponent } from './dni-ar.component';

describe('DniArComponent', () => {
  let component: DniArComponent;
  let fixture: ComponentFixture<DniArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DniArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DniArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
