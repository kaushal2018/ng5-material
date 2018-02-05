import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent implements OnInit {
  @Input('is-favourite') isSelected: boolean;
  @Output('myChange') myClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log(this.isSelected);
  }
  onclick() {
    this.isSelected = !this.isSelected;
    // this.myClick.emit(this.isSelected);
    this.myClick.emit({ newValue: this.isSelected, anotherValue: 'another param' });
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
  anotherValue: string;
}
