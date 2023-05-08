import { Component } from '@angular/core';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private restService:RestService){}

  tryIt(){
    this.restService.getTestData().subscribe(res=>{
      console.log("RESULT: ", res)
    })
  }
}

