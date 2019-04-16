import { DniArComponent } from './pages/document-extraction/dni-ar/dni-ar.component';
import { ExtractFaceVideoComponent } from './pages/extraction/extract-face-video/extract-face-video.component';
import { ExtractFaceImageComponent } from './pages/extraction/extract-face-image/extract-face-image.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyT2tComponent } from './pages/matching/verify-t2t/verify-t2t.component';

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
    path: 'matching/verify-t2t',
    component: VerifyT2tComponent,
    data: { title: 'Verification (1:1) of two supplied biometric subjects' }
  },
  {
    path: 'document-extraction/dni-ar',
    component: DniArComponent,
    data: { title: 'Extracts Argentinean ID Card document information' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
