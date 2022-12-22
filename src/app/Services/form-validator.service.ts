import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  preventNumber(e: any) {
    const regex = /^[a-zA-Z ]*$/g;
    if (!regex.test(e)) {
      return false;
    } else {
      return true;
    }
  }
  preventText(e: any) {
    const regex = /^[0-9]*$/g;
    if (!regex.test(e)) {
      return false;
    } else {
      return true;
    }
  }
}
