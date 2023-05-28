export class Square{
    constructor(column:number, row:number, subBox:number){
        this.column = column;
        this.row = row;
        this.subBox = subBox;
    }
    column:number;
    row:number;
    subBox:number;
    trueValue:string|null = null;
    currValue:string|null = null;
    displayTrueValue:boolean = false;
    isLocked:boolean = false;
    displayedValue:string|null = null;
  
}
  