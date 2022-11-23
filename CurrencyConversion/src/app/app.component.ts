import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurrencyConversion';

  result!:number;
  cur = '';
  calc(value1 : string, value2 : string, value3 : string)
  {
    if(value1 == "1" && value2 == "1" ) {
      this.result = parseFloat(value3)
      this.cur = 'INR'
    }
    else if(value1 == "2" && value2 == "2") {
      this.result = parseFloat(value3)
      this.cur = 'USD'
    }
    else if(value1 == "3" && value2 == "3") {
      this.result = parseFloat(value3)
      this.cur = 'JPY'
    }
    else if(value1 == "1" && value2 == "2") {
      this.result = parseFloat(value3) / 82.30
      this.cur = 'USD'
    }
    else if(value1 == "2" && value2 == "1") {
      this.result = parseFloat(value3) * 82.30
      this.cur = 'INR'
    }
    else if(value1 == "1" && value2 == "3") {
      this.result = parseFloat(value3) * 1.78
      this.cur = 'JPY'
    }
    else if(value1 == "3" && value2 == "1") {
      this.result = parseFloat(value3) / 1.78
      this.cur = 'INR'
    }
    else if(value1 == "2" && value2 == "3") {
      this.result = parseFloat(value3) * 146.25
      this.cur = 'JPY'
    }
    else if(value1 == "3" && value2 == "2") {
      this.result = parseFloat(value3) / 146.25
      this.cur = 'USD'
    }
  }
}
