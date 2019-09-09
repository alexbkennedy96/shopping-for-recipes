import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Cookies', 'Chocholate chip cookies',
      'https://pinchofyum.com/wp-content/uploads/Chocolate-Chip-Cookies-Recipe.jpg'),
    new Recipe('Baked Salmon', 'Garlic caper butter baked salmon',
      'https://www.inspiredtaste.net/wp-content/uploads/2018/09/Easy-Oven-Baked-Salmon-Recipe-2-1200.jpg')
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.recipes.length);
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
