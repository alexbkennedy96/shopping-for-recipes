import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cookies',
      'Chocholate chip cookies',
      'https://pinchofyum.com/wp-content/uploads/Chocolate-Chip-Cookies-Recipe.jpg',
      [
        new Ingredient('Dough', 1),
        new Ingredient('Chocholate chips', 100)
      ]),
    new Recipe('Baked Salmon',
      'Garlic caper butter baked salmon',
      'https://www.inspiredtaste.net/wp-content/uploads/2018/09/Easy-Oven-Baked-Salmon-Recipe-2-1200.jpg',
      [
        new Ingredient('Salmon', 3),
        new Ingredient('Garlic butter', 2)
      ])
  ];
  constructor() { }

  getRecipes() {
    // Slice results in just getting a copy
    return this.recipes.slice();
  }
}
