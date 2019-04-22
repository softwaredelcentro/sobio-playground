import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextIndependentVoiceComponent } from './text-independent-voice.component';

describe('TextIndependentVoiceComponent', () => {
  let component: TextIndependentVoiceComponent;
  let fixture: ComponentFixture<TextIndependentVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextIndependentVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextIndependentVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
