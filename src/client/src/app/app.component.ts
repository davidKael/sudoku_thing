import { Component } from '@angular/core';
import { RestService } from './services/rest.service';
import { SudokuEngineService } from './services/sudokuEngine/sudoku-engine.service';
import { GameScorePOST } from './models/gamescore-post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private restService:RestService, public sudokuEngineService:SudokuEngineService){}

  tryIt(){
    this.restService.getSudokuScoreBoard().subscribe(res=>{
      console.log("RESULT: ", res)
    })
  }

  tryPostIt(){
    let newScore = new GameScorePOST("Sudoku", "Jens", 432)
    this.restService.postSudokuScoreBoard(newScore).subscribe(res=>{
      console.log("RESULT: ", res)
    })
  }
}

