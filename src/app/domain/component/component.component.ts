import { Component, OnInit } from '@angular/core';
import {IngredientComponent} from '../ingredient/ingredient.component';
import {UnitComponent} from '../unit/unit.component'

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  constructor(
    private _componentId : number,
    private _ingredient : IngredientComponent,
    private _unit : UnitComponent,
    private _quantity : number
  ) { }
    get componentId() : number {return this._componentId}
    get ingredient() : IngredientComponent { return this._ingredient}
    get unit() : UnitComponent { return this._unit}
    get quantity() : number { return this._quantity}
  

  ngOnInit() {
  }

}
