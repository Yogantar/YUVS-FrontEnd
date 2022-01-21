import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'; 

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  principal:number=0;
  rate:number=0;
  time:number=0;
  si:number=0;
  amt:number=0;
  emi:number=0;

  simpleInterest(){
    this.si=(this.principal*this.rate*this.time)/(100*12);
    this.amt=this.si+this.principal;
    this.emi=(this.principal+this.si)/this.time;
  }//SI() ends
  ngOnInit(): void {

    
  }

  
}
