import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistrationForm';

  coun = ''; 
  bt = 'true';
  place(value : string)
  {
    if(value == "1")
      this.coun = "paris"
  }
  manage(bt : string) {
    if (null) {
        this.bt = 'false';
    }
    
}    
}
