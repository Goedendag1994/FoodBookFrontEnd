import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

   ngOnInit() {}
  

  constructor(
    private _G: String,
    private _ML: String,
    private _L: String, 
    private _TS: String,
    private _TBS: String, 
    private _CUP: String, 
    private _OUNCE: String, 
    private _SLICES: String, 
    private _CLOVES: String, 
    private _POUND: String) {

    }
    get G() : String {return this._G}
    get ML() : String {return this._ML}
    get L() : String {return this._L}
    get TS() : String {return this._TS}
    get TBS() : String {return this._TBS}
    get CUP() : String {return this._CUP}
    get OUNCE() : String {return this._OUNCE}
    get SLICES() : String {return this._SLICES}
    get CLOVES() : String {return this._CLOVES}
    get POUND() : String {return this._POUND}
  }
  
