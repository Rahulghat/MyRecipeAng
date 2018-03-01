import { Ingredient } from '../shared/ingredient.model';
import { Output, EventEmitter } from '@angular/core';

export class ShoppingListService {


  IngredientChanged = new EventEmitter<Ingredient[]>();


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientChanged.emit(this.ingredients.slice());
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.IngredientChanged.emit(this.ingredients.slice());
  }



}
