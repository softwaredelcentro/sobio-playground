import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractFingerprintImageComponent } from './extract-fingerprint-image.component';

describe('ExtractFingerprintImageComponent', () => {
  let component: ExtractFingerprintImageComponent;
  let fixture: ComponentFixture<ExtractFingerprintImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractFingerprintImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractFingerprintImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
