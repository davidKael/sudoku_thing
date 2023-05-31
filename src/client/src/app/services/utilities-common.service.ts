import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesCommonService {

  private formSubmittedSource = new BehaviorSubject<boolean>(false);
  formSubmitted$ = this.formSubmittedSource.asObservable();

  submitForm() {
    this.formSubmittedSource.next(true);
  }
}
