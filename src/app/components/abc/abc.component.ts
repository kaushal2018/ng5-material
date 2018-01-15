import { Component, OnInit } from '@angular/core';
import { AuthorListService } from '../../providers/abc.services';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css'],
  providers: [ AuthorListService ]
})
export class AbcComponent implements OnInit {
  listAuthors;
  constructor(public authorService: AuthorListService) { }

  ngOnInit() {
    // this.authorService.authorList.push('author 1', 'author 2', 'author 3');
    // this.listAuthors = this.authorService.authorList;
    this.listAuthors = this.authorService.getAuthorList();
  }

}
