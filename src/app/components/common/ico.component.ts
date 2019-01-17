import { Component, Input } from '@angular/core';

@Component({
  selector: 'ug-photo-ico',
  template: '<i class="fa fa-{{ class }}"></i> {{ value }}',
  styles: ['.fa-heart {color:#FF0000}']
})

export class IcoComponent {

  @Input() value: string;
  @Input() class: string;

  constructor( ) { }

}
