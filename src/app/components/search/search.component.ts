import { Component } from '@angular/core';
import lineData from '../../../assets/data.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  dataset: string[];

  fillDataSet(dataset: string[], element: any) {
    element[1].forEach((e: string) => {
      if (!dataset.includes(e[0])) {
        dataset.push(e[0]);
      }
    });
  }
  constructor() {
    this.dataset = [];
    lineData.lines.forEach((element: any) => {
      this.fillDataSet(this.dataset, element);
    });
    console.log(this.dataset);
  }
}
