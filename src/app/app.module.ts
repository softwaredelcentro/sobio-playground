import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ExtractFaceImageComponent } from './pages/extraction/extract-face-image/extract-face-image.component';
import { HomeComponent } from './pages/home/home.component';
import { ExtractFaceVideoComponent } from './pages/extraction/extract-face-video/extract-face-video.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { VerifyT2tComponent } from './pages/matching/verify-t2t/verify-t2t.component';
import { DniArComponent } from './pages/document-extraction/dni-ar/dni-ar.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { HtmlSecurePipe } from './components/gauge/pipes/html-secure.pipe';
import { EnrollComponent } from './pages/database/enroll/enroll.component';
import { ListComponent } from './pages/database/list/list.component';
import { BySubjectComponent } from './pages/database/by-subject/by-subject.component';
import { UpdateComponent } from './pages/database/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ExtractFaceImageComponent,
    HomeComponent,
    ExtractFaceVideoComponent,
    HeaderComponent,
    LoaderComponent,
    VerifyT2tComponent,
    DniArComponent,
    GaugeComponent,
    HtmlSecurePipe,
    EnrollComponent,
    ListComponent,
    BySubjectComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
