import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDependentVoiceComponent } from './text-dependent-voice.component';

describe('TextDependentVoiceComponent', () => {
  let component: TextDependentVoiceComponent;
  let fixture: ComponentFixture<TextDependentVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextDependentVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDependentVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
