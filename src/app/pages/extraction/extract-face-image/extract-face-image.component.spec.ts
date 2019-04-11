import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractFaceImageComponent } from './extract-face-image.component';

describe('ExtractFaceImageComponent', () => {
  let component: ExtractFaceImageComponent;
  let fixture: ComponentFixture<ExtractFaceImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractFaceImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractFaceImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
