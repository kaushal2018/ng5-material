import { Component, OnInit } from '@angular/core';
import { TabbedReport } from '../../shared/models/tabbedreport.model';

@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrls: ['./inheritance.component.css']
})
export class InheritanceComponent implements OnInit {
  firstName = 'Nate';
  headers: string[] = ['Kaushal', 'Kumar', 'Intelegencia'];
  data: string[] = ['First line', 'Second line', 'Third line'];
  r: TabbedReport = new TabbedReport(this.headers, this.data);
  constructor() {
  }

  ngOnInit() {
    this.r.run();
    // this.greeting = `Hello ${this.headers}`;
  }
}
