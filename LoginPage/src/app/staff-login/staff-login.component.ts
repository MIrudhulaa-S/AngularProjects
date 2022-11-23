import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  Staff = '';
  func(val : string){
    this.Staff = "staff logging in..."
  }
  constructor() { }

  ngOnInit(): void {
  }

}
