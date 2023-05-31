export class GameScore{

    constructor(id:number,game:string, player_name:string, finished_in_seconds:number){
        this.id=id;
        this.game = game;
        this.player_name = player_name;
        this.finished_in_seconds = finished_in_seconds;
    }

    id:number;
    game:string;
    player_name:string;
    finished_in_seconds:number;
    
}
  