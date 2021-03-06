import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  count:number = 0;
  
	shouldRun:boolean = false;
	counter:number = 0;

  constructor() { }

	increaseByOne() {
    this.count = this.count + 1;
	}
	decreaseByOne() {
    this.count = this.count - 1;
  }
	start() {
    this.shouldRun = true;
    let interval = setInterval(() =>
      {  
        if(this.shouldRun === false)
          clearInterval(interval);
        else
          this.counter = this.counter + 1;			
      }, 10);
	}
	stop() {
    this.shouldRun = false;
  }
  clear() {
    this.counter = 0;
    this.shouldRun = false;
  }
  
  ngOnInit() {
  }

}
