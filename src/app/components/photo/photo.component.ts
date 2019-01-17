import { Component, Input, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';
import { IPhoto } from '../../interfaces/photo';

@Component({
  selector: 'ug-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {

  @Input() photoId: string;
  width: number = 400;
  height: number = 400;

  photo: IPhoto;
  show: boolean = false;
  modalOpen: boolean = false;

  constructor( private _unsplashService: UnsplashService ) { }

  ngOnInit() {
    this._unsplashService.getPhoto( this.photoId, this.width, this.height ).subscribe( data => {
      this.photo = data;
      this.show = true;
    });
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }

}
