import {Component, EventEmitter, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        display: 'block',
        opacity: 1
      })),
      state('closed', style({
        display: 'none',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class MenuComponent {

  @Output() menuButtonClicked = new EventEmitter<boolean>();

  isOpen = false;

  constructor() {
  }

  changeState() {
    this.isOpen = !this.isOpen;
    this.menuButtonClicked.emit(this.isOpen);
  }

}
