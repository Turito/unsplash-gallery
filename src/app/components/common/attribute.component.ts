import { Component, Input } from '@angular/core';

@Component({
  selector: 'ug-photo-attr',
  template: '{{ value }}'
})

export class AttributeComponent {

  @Input() value: string;

  constructor( ) { }

}
