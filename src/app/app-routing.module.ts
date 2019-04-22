import { ExtractFingerprintImageComponent } from './pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component';
import { TextIndependentVoiceComponent } from './pages/extraction/text-independent-voice/text-independent-voice.component';
import { TextDependentVoiceComponent } from './pages/extraction/text-dependent-voice/text-dependent-voice.component';
import { IdentifyComponent } from './pages/matching/identify/identify.component';
import { VerifyComponent } from './pages/matching/verify/verify.component';
import { UpdateComponent } from './pages/database/update/update.component';
import { ListComponent } from './pages/database/list/list.component';
import { BySubjectComponent } from './pages/database/by-subject/by-subject.component';
import { DniArComponent } from './pages/document-extraction/dni-ar/dni-ar.component';
import { ExtractFaceVideoComponent } from './pages/extraction/extract-face-video/extract-face-video.component';
import { ExtractFaceImageComponent } from './pages/extraction/extract-face-image/extract-face-image.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyT2tComponent } from './pages/matching/verify-t2t/verify-t2t.component';
import { EnrollComponent } from './pages/database/enroll/enroll.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'extraction/extract-face-image',
    component: ExtractFaceImageComponent,
    data: { title: 'Extract Face Image' }
  },
  {
    path: 'extraction/extract-face-video',
    component: ExtractFaceVideoComponent,
    data: { title: 'Extract Face Video' }
  },
  {
    path: 'extraction/extract-fingerprint-image',
    component: ExtractFingerprintImageComponent,
    data: { title: 'Extract Fingerprint Image' }
  },
  {
    path: 'matching/identify',
    component: IdentifyComponent,
    data: {
      title:
        'Performs an identification (1:N) of supplied biometric data against enrolled subjects (that match optionally supplied conditions)'
    }
  },
  {
    path: 'extraction/text-dependent-voice',
    component: TextDependentVoiceComponent,
    data: { title: 'Extract Text Dependent Voice' }
  },
  {
    path: 'extraction/text-independent-voice',
    component: TextIndependentVoiceComponent,
    data: { title: 'Extract Text Independent Voice' }
  },
  {
    path: 'matching/verify',
    component: VerifyComponent,
    data: { title: 'Performs a verification (1:1) of supplied biometric data against a supplied enrolled subject id' }
  },
  {
    path: 'matching/verify-t2t',
    component: VerifyT2tComponent,
    data: { title: 'Verification (1:1) of two supplied biometric subjects' }
  },
  {
    path: 'document-extraction/dni-ar',
    component: DniArComponent,
    data: { title: 'Extracts Argentinean ID Card document information' }
  },
  {
    path: 'database/enroll',
    component: EnrollComponent,
    data: { title: 'Performs a biometric enrollment supplied biometric data which is associated with supplied enrolled subject id' }
  },
  {
    path: 'database/by-subject',
    component: BySubjectComponent,
    data: { title: 'Operations using subjectID' }
  },
  {
    path: 'database/list',
    component: ListComponent,
    data: { title: 'List enrolled Subject ID\'s' }
  },
  {
    path: 'database/update',
    component: UpdateComponent,
    data: { title: 'Updates biometric data of an already enrolled subject' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
