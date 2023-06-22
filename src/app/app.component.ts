import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Talisman Statistics';

  isMenuVisible = false;

  changeMenuVisibility(isOpen: boolean) {
    this.isMenuVisible = isOpen;
  }
}
