import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ops',
  templateUrl: './add-ops.component.html',
  styleUrls: ['./add-ops.component.css']
})
export class AddOpsComponent implements OnInit {

  ngOnInit(): void {
  }

res !: number;
addition(value1: string, value2: string)
{
  this.res = parseFloat(value1) + parseFloat(value2)
}

}
