import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Square } from 'src/app/models/square.model';
import { Subscription } from 'rxjs';
import { UtilitiesCommonService } from '../../services/utilities-common.service';

interface GridTemplate {

  key: string,
  value: string[]

}

@Component({
  selector: 'app-grid-field',
  templateUrl: './grid-field.component.html',
  styleUrls: ['./grid-field.component.scss']
})
export class GridFieldComponent implements OnInit {

  formSubmitted = false;
  private subscription: Subscription | null = null;
  constructor(private utilitiesCommonService: UtilitiesCommonService) { }

  count = Array;



  gridTemplates: GridTemplate[] = [
    {
      key: "1x1",
      value: ["1"]
    },
    {
      key: "2x2",
      value: ["1", "2", "3", "4"]
    },
    {
      key: "3x3",
      value: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    },
    {
      key: "4x4",
      value: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G"]
    }
  ]



  selectedTemplate: string = "3x3";

  answerValues: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  edge = Math.sqrt(this.answerValues.length)
  selectedSquare: Square | null = null;

  squares: Square[] = [];
  startLocked: number = 17;
  relatives: Square[] = [];

  @ViewChild('grid') grid: any;








  ngOnInit(): void {

    this.subscription = this.utilitiesCommonService.formSubmitted$.subscribe(
      formSubmitted => this.formSubmitted = formSubmitted
    );

  }


  setUpGrid() {

    const startField = this.gridTemplates.find(x => x.key == this.selectedTemplate)?.value;
    if (startField) this.answerValues = startField;
    this.selectNumber();

    this.squares.length = 0;

    for (let row = 0; row < this.answerValues.length; row++) {
      for (let column = 0; column < this.answerValues.length; column++) {

        let subrow = Math.floor(row / Math.sqrt(this.answerValues.length));
        let subcol = Math.floor(column / Math.sqrt(this.answerValues.length));



        this.squares.push(new Square(column, row, ((subrow) * (Math.sqrt(this.answerValues.length)) + subcol), subrow, this.answerValues.slice()))


      }

    }
  }






  setCurrentAnswer(value: string) {
    if (!this.selectedSquare) return;
    this.selectedSquare.currValue = value;
    if (!this.selectedSquare.displayTrueValue) {
      this.selectedSquare.displayedValue = value;
    }
  }

  setTrueAnswer(value: string, square: Square, display: boolean = false) {


    square.trueValue = value;
    square.possibles.length = 0;
    square.currValue = value;
    if (!square) return;
    if (display) {

      square.displayedValue = value;
    }

    this.getRelated(square).forEach(s => {
      const index = s.possibles.indexOf(value);
      if (index !== -1) {
        s.possibles.splice(index, 1)[0];
      }
    })

  }

  checkPossibles() {
    console.log("Possibles: ", this.selectedSquare?.possibles)
  }

  lockAnswer(square: Square) {

    square.trueValue = square.trueValue;
    if (!square) return;
    square.currValue = square.trueValue;
    square.displayedValue = square.trueValue;
    square.isLocked = true;

  }


  selectNumber(square: Square | null = null) {
    this.selectedSquare = square;
    if (square) {
      this.relatives = this.getRelated(square);
    }
    else {
      this.relatives = [];
    }

  }




  getRelated(square: Square): Square[] {

    return this.squares.filter(x => x != square && (x.column == square.column || x.row == square.row || x.subBox == square.subBox));

  }

  generateGrid() {



    let finished = false;
    let tries = 0;
    while (!finished && tries < 1000) {

      this.setUpGrid();

      let unsetSquares = this.squares.slice();

      while (unsetSquares.length > 0) {

        let newValue: string | null = null;
        let nextToShave: Square | null = null;

        unsetSquares.sort((a, b) => a.possibles.length - b.possibles.length);

        if (unsetSquares[0].possibles.length == 1) {
          nextToShave = unsetSquares[0];
          newValue = nextToShave.possibles[0];
        }
        else {
          // let found:{foundSquare:Square,foundValue:string}[]=[]

          // for(let i = 0; i < unsetSquares.length; i++){
          //   unsetSquares[i]
          //   let foundValue = unsetSquares[i].possibles.find(p=>this.getRelated(unsetSquares[i]).find(other=>other!=unsetSquares[i] && !other.possibles.includes(p) && other.trueValue!=p))
          //   if(foundValue){
          //     found.push({
          //       foundSquare:unsetSquares[i],
          //       foundValue:foundValue
          //     });
          //     console.log("hej: ", found.length)
          //   }

          // }
          // if(found.length>0){
          //   found.sort((a,b)=>b.foundSquare.possibles.length-a.foundSquare.possibles.length)
          //   newValue = found[0]?.foundValue;
          //   nextToShave = found[0]?.foundSquare;
          // }
          // else{

          nextToShave = unsetSquares[0];
          if (nextToShave.possibles.length < 1) {
            break;
          }
          const randomNumber = Math.floor(Math.random() * nextToShave.possibles.length);
          newValue = nextToShave.possibles.splice(randomNumber, 1)[0];

          // }
        }






        this.setTrueAnswer(newValue, nextToShave);

        const index = unsetSquares.indexOf(nextToShave);
        if (index !== -1) {
          unsetSquares.splice(index, 1)[0];
        }
        if (unsetSquares.length < 1) {
          finished = true;
        }
      }
      tries++;

      let randomized: number[] = [];

      for (let i = 0; i <= this.startLocked; i++) {
        let count = 0;
        while (count < 100) {
          count++;
          let randomIndex: number = Math.floor(Math.random() * this.squares.length);
          if (!randomized.includes(randomIndex)) {
            randomized.push(randomIndex);
            break;
          }
        }

      }

      randomized.forEach(r => {
        this.lockAnswer(this.squares[r]);
      })

    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
