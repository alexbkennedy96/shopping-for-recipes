import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails: Recipe;
  // recipeIngredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  // addRecipeIngredients(ingredient: Ingredient) {
  //   this.recipeIngredients.push(ingredient);
  // }

  addIngredientsToList() {
    this.slService.addRecipeIngredients(this.recipeDetails.ingredients);
  }

}
