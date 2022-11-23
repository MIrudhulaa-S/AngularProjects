import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents-login',
  templateUrl: './parents-login.component.html',
  styleUrls: ['./parents-login.component.css']
})
export class ParentsLoginComponent implements OnInit {

  Parents = '';
  func(val : string){
    this.Parents = "parent logging in..."
  }
  constructor() { }

  ngOnInit(): void {
  }

}
