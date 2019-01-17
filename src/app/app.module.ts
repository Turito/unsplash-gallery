import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent as GalleryContainer } from './containers/gallery/gallery.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ModalComponent } from './components/modal/modal.component';
import { SearchComponent } from './components/search/search.component';
import { UnsplashService } from './services/unsplash.service';
import { PhotoComponent } from './components/photo/photo.component';
import { AttributeComponent } from './components/common/attribute.component';
import { IcoComponent } from './components/common/ico.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryContainer,
    GalleryComponent,
    ModalComponent,
    SearchComponent,
    PhotoComponent,
    AttributeComponent,
    IcoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UnsplashService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
