import { Component } from '@angular/core';
import { RestService } from './services/rest.service';
import { SudokuEngineService } from './services/sudokuEngine/sudoku-engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private restService:RestService, public sudokuEngineService:SudokuEngineService){}

  tryIt(){
    this.restService.getTestData().subscribe(res=>{
      console.log("RESULT: ", res)
    })
  }
}

