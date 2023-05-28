import { Component, OnInit, ViewChild } from '@angular/core';
import { Square } from 'src/app/models/square.model';


@Component({
  selector: 'app-grid-field',
  templateUrl: './grid-field.component.html',
  styleUrls: ['./grid-field.component.scss']
})
export class GridFieldComponent implements OnInit {

  count = Array;
  rows:number = 9;
  columns:number = 9;
  columnGroups:number = 3;
  rowGroups:number = 3;

  answerBtnValues:string[] = ["1","2","3","4","5","6","7","8", "9"];

  selectedSquare:Square|null = null;

  squares : Square[] = [];

  relatives : Square[] = [];

  @ViewChild('grid') grid:any;

  constructor() { }




 

  ngOnInit(): void {
    for(let row = 0;  row < this.rows; row++){
      for(let column = 0;  column < this.columns; column++){

        let subrow = Math.floor(row / Math.floor(this.rows/this.rowGroups));
        let subcol =  Math.floor(column/Math.floor(this.columns/this.columnGroups));

        this.squares.push(new Square(column,row,((subrow)*(this.columnGroups)+subcol)))
 

      }
      
    }
  }

  

    
  setCurrentAnswer(value:string){ 
    if(!this.selectedSquare) return;
    this.selectedSquare.currValue = value;
    if(!this.selectedSquare.displayTrueValue){
      this.selectedSquare.displayedValue = value;
    }
  }

  setTrueAnswer(value:string, square:Square, display:boolean=false){ 
    //const square = this.playfieldPositions[key];
    square.trueValue = value;
    if(!square) return;
    if(display){
      square.currValue  = value;
      square.displayedValue = value;
    }
  }

  lockAnswer(square:Square){

    square.trueValue = square.trueValue;
    if(!square) return;
    square.currValue  = square.trueValue;
    square.displayedValue = square.trueValue;
    square.isLocked = true;
  
  }


  selectNumber(square:Square|null=null){
    this.selectedSquare = square;
    if(square){
      this.relatives = this.getRelated(square);
    }
    else{
      this.relatives = [];
    }
    
  }


  

  getRelated(square:Square):Square[]{

    return this.squares.filter(x=>x!=square&&(x.column==square.column||x.row==square.row||x.subBox==square.subBox));

  }

}
