import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {}

import { AppComponent } from './app.component';
import { DishComponent } from './domain/dish/dish.component';
import { IngredientComponent } from './domain/ingredient/ingredient.component'
import { ComponentComponent } from './domain/component/component.component';
import { UnitComponent } from './domain/unit/unit.component';
i


@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    IngredientComponent,
    ComponentComponent,
    UnitComponent,
    IngredientComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
