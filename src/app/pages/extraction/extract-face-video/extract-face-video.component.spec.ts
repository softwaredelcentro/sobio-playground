import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractFaceVideoComponent } from './extract-face-video.component';

describe('ExtractFaceVideoComponent', () => {
  let component: ExtractFaceVideoComponent;
  let fixture: ComponentFixture<ExtractFaceVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractFaceVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractFaceVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
