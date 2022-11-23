import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  result = '';

  onsub(val : string)
  {
    this.result = "Succesfully Logged in..."
  }
  constructor() { }

  ngOnInit(): void {
  }

}
