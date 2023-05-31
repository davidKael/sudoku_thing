export class GameScorePOST{

    constructor(game:string, player_name:string, finished_in_seconds:number){
        this.game = game;
        this.player_name = player_name;
        this.finished_in_seconds = finished_in_seconds;
    }

    game:string;
    player_name:string;
    finished_in_seconds:number;
    
}
  