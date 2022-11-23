import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-ops',
  templateUrl: './sub-ops.component.html',
  styleUrls: ['./sub-ops.component.css']
})
export class SubOpsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


res !: number;
addition(value1: string, value2: string)
{
  this.res = parseFloat(value1) - parseFloat(value2)
}
}
