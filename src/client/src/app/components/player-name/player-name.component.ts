// my-component.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilitiesCommonService } from '../../services/utilities-common.service';

@Component({
  selector: 'app-player-name',
  templateUrl: './player-name.component.html',
  styleUrls: ['./player-name.component.scss']
})
export class PlayerNameComponent {
  constructor(private utilitiesCommon: UtilitiesCommonService) { }
  onSubmit(form: NgForm) {
    console.log('Submitted value:', form.value);
    this.utilitiesCommon.submitForm();

  }

}
