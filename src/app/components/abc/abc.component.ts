import { Component, OnInit } from '@angular/core';
import { AuthorListService } from '../../providers/abc.services';
import { Practice } from '../../shared/models/practice';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css'],
  providers: [ AuthorListService ]
})
export class AbcComponent implements OnInit {
  isActive = true;
  email = 'abc@abc.com';
  course = {
    rating: 4.9705,
    price: 190.95,
    releaseDate: new Date()
  };
  text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. ';
  listAuthors;
  private obj = new Practice(1, 2);
  x; y;
  constructor(public authorService: AuthorListService) { }
  onDivClick() {
    console.log('div was clicked');
  }
  onSave($event) {
    $event.stopPropagation(); // prevents event bubling up towards parent container
    console.log('p was clicked', $event);
  }
  onKeyUp() {
    console.log(this.email);
  }
  ngOnInit() {
    this.obj.draw();
    this.obj.X = 3;
    this.obj.setY(4);
    this.obj.draw();
    this.x = this.obj.X;
    this.y = this.obj.getY();

    // this.authorService.authorList.push('author 1', 'author 2', 'author 3');
    // this.listAuthors = this.authorService.authorList;
    this.listAuthors = this.authorService.getAuthorList();
  }

}
