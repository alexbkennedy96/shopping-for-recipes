import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageToDisplay = new EventEmitter<string>();
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  onRecipesClicked() {
    this.pageToDisplay.emit('recipes');
  }


  onListClicked() {
    this.pageToDisplay.emit('lists');
  }
}
