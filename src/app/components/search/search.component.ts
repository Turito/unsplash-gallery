import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ug-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() queryDone: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

}
