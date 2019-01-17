import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPhoto } from '../../interfaces/photo';

@Component({
  selector: 'ug-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  @Input() photo: IPhoto;

  modalIsOpen:string = '';

  constructor() {
    this.open();
  }

  ngOnInit() {}

  open () {
    this.modalIsOpen = 'show';
  }
  
  close () {
    this.modalIsOpen = '';
    this.onClose.emit();
  }

}
