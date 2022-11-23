import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mul-ops',
  templateUrl: './mul-ops.component.html',
  styleUrls: ['./mul-ops.component.css']
})
export class MulOpsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


res !: number;
addition(value1: string, value2: string)
{
  this.res = parseFloat(value1) * parseFloat(value2)
}
}
