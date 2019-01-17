import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IGallery } from '../../interfaces/gallery';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
    selector: 'ug-gallery-container',
    templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
    query:string = '';
    show:boolean = false;
  
    @Input() searchTerm: Subject<string>;
    gallery: IGallery = null;

  constructor(private _unsplashService: UnsplashService) {}

  ngOnInit() {
    this.searchTerm.subscribe( query => {
      this.searchGallery(query);
    } );
  }

  searchGallery(query:string) {
    this._unsplashService.getGallery( query ).subscribe( data => {
      this.gallery = data;
      this.show = ( data.total ) ? true : false;
    });
  }
}
