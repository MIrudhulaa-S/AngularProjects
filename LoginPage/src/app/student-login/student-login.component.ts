import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  Student = '';
  func(val : string){
    this.Student = "student logging in..."
  }
  constructor() { }

  ngOnInit(): void {
  }

}
