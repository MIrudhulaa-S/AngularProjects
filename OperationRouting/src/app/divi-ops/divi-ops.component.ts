import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divi-ops',
  templateUrl: './divi-ops.component.html',
  styleUrls: ['./divi-ops.component.css']
})
export class DiviOpsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


res !: number;
addition(value1: string, value2: string)
{
  this.res = parseFloat(value1) / parseFloat(value2)
}
}
