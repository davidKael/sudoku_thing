export class Square{
    constructor(column:number, row:number, subBox:number, possibles:string[]){
        this.column = column;
        this.row = row;
        this.subBox = subBox;
        this.possibles = possibles;
    }
    column:number;
    row:number;
    subBox:number;
    possibles:string[];
    trueValue:string|null = null;
    currValue:string|null = null;
    displayTrueValue:boolean = false;
    isLocked:boolean = false;
    displayedValue:string|null = null;
    
}
  