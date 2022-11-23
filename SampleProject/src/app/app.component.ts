import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result!:number;
  
  Calculate(val1:string, val2:string)
  {
      this.result = parseFloat(val1) + parseFloat(val2);
  }
  
}
