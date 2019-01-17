import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IGallery } from '../../interfaces/gallery';

@Component({
  selector: 'ug-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() gallery: IGallery;
  @Output() photoSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  viewPhoto(id: number) {
    this.photoSelected.emit(id);
  }
}
