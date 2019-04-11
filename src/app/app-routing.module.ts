import { ExtractFaceVideoComponent } from './pages/extraction/extract-face-video/extract-face-video.component';
import { ExtractFaceImageComponent } from './pages/extraction/extract-face-image/extract-face-image.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
