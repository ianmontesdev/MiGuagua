import { Component, OnInit } from '@angular/core';
import lineData from '../../../assets/data.json';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
})
export class RoutesComponent {
  showLine(line: (string | (string | number)[][])[]) {
    this.lineDetail = [];
    this.lineDetail.push(line[1]);
    this.lineDetail.push(line[2]);
    console.log(this.lineDetail);
  }

  lines: (string | (string | number)[][])[][];
  lineDetail: any;
  constructor() {
    this.lineDetail = [];
    this.lines = lineData.lines;
  }

  ngOnInit() {}
}
