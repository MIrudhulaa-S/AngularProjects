import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  Admin = '';
  func(val : string){
    this.router.navigate(‘/patient_details’)
  }
 
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
