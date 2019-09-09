import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-for-recipes';
  pageDisplayed = 'recipes';

  onDisplayPage(page: string) {
    this.pageDisplayed = page;
  }
}
