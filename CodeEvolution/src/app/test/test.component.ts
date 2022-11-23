import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

<h1>Test works</h1>
<h1>hello {{name}}</h1>
<h1>{{15 + 18}}</h1>
<h1>{{name.length}}</h1>
<h1> {{name.toUpperCase()}}</h1>
<h1> {{name | lowercase}}</h1>
<h1>{{siteUrl}}</h1>
<br>
<img [src] = "can" />
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Can Yamen"
  public siteUrl = window.location.href
  
  can = '';
  constructor() { 
    this.can = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7ju3eJOCg7442JtFsJz5YKn6hZbMS31pfw&usqp=CAU"
  }
  ngOnInit(): void {
  }

  

}
