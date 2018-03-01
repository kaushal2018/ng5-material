import { Component, OnInit, ViewChild } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'app-number-parent',
  templateUrl: './number-parent.component.html',
  styleUrls: ['./number-parent.component.css']
})
export class NumberParentComponent implements OnInit {

  @ViewChild(NumberComponent)
  private numberComponent: NumberComponent;

  constructor() { }

  increase() {
      this.numberComponent.increaseByOne();
  }
  decrease() {
      this.numberComponent.decreaseByOne();
  }
  
  startStopwatch() {
      this.numberComponent.start();
  }
  stopStopwatch() {
      this.numberComponent.stop();
  }
  resetStopwatch() {
      this.numberComponent.clear();
  }

  ngOnInit() {
  }

}
