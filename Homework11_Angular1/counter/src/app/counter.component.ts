import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterValue = 5;
  constructor() { }

  increase(){
    this.counterValue = this.counterValue + 1;
  }

  decrease(){
    this.counterValue = this.counterValue - 1;
  }

  ngOnInit() {
  }

}
