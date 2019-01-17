import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Unsplash Gallery';

  searchTerm:string = 'Hola';

  searchTermChange: Subject<string> = new Subject();

  receiveTermSearch(term:string) {
    if((term != this.searchTerm)){
      this.searchTerm = term;
      this.searchTermChange.next(term);
    }
  }
}
