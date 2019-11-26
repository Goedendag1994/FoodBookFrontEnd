import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
ngOnInit() {}
  constructor(
    private _ingredientId : number,
    private _nameIngredient : String 
  ) {}
    get ingredientId() : number {return this._ingredientId}
    get nameIngredient () : String { return this._nameIngredient}
   }

  
  

