import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Rattatouille',
      'A hippie alternative to the Burger.',
      'https://cdn.pixabay.com/photo/2017/10/20/11/43/ratatouille-2870901_960_720.jpg',
      [
        new Ingredient('Aubergine', 1),
        new Ingredient('Peppers', 2),
        new Ingredient('Tomatoes', 1)
      ]),
    new Recipe('Big Cheese',
      'Never enough cheese?',
      'https://images.pexels.com/photos/660282/pexels-photo-660282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Cheddar Slices', 2),
        new Ingredient('Bacon Slices', 2),
        new Ingredient('Fries', 25),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
