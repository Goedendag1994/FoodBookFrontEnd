import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
 ngOnInit() {
  }
  constructor(
    private _dishId : number,
    private _dishTitel : string,
    private _steps : string, 
    private _allComponents : Array<Component>
  ) { }
  get dishId() : number {return this._dishId}
  get dishTitel() : string { return this._dishTitel}
  get steps() : string { return this._steps}
  get allComponents() : Array<Component> {return this._allComponents}

}
