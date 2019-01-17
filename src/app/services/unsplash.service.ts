import { Injectable } from '@angular/core';
import { ISearch } from '../interfaces/search';
import { IGallery } from '../interfaces/gallery';
import { IPhoto } from '../interfaces/photo';
import Unsplash, {toJson} from 'unsplash-js';
import { Observable, from, throwError } from "rxjs";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Injectable()
export class UnsplashService {

  private unsplash;

  constructor() {
    this.unsplash = new Unsplash({
      applicationId: "0a79547583d865bfae1ca71593b7bc67ed93da82ebbea36133ba36f1b9834b52",
      secret: "99aee83ff404b56afb883a790931968da91fd9adde30462da06dab8bd6c069fb",
      callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
    });
  }

  getGallery( term:string ): Observable<IGallery> {
    return from(this.unsplash.search.collections(term, 1).then(toJson));
  }

  getPhotos( term:string, page:number ): Observable<ISearch> {
    return from(this.unsplash.search.collections(term, page).then(toJson));
  }

  getPhoto( id:string, width:number, height:number ): Observable<IPhoto> {
    return from(this.unsplash.photos.getPhoto(id, width, height, [0, 0, width, height]).then(toJson));
  }
}
