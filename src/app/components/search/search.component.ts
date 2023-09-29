import { Component } from '@angular/core';
import lineData from '../../../assets/data.json';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  dataset: string[];
  searchForm: FormGroup;
  foundGuaguas: any;

  fillDataSet(dataset: string[], element: any) {
    element[1].forEach((e: string) => {
      if (!dataset.includes(e[0])) {
        dataset.push(e[0]);
      }
    });
  }
  constructor() {
    this.searchForm = new FormGroup({
      formFrom: new FormControl(),
      formTo: new FormControl(),
    });

    this.dataset = [];
    lineData.lines.forEach((element: any) => {
      this.fillDataSet(this.dataset, element);
    });
    this.foundGuaguas = [];
  }

  findGuaguas() {
    console.log(lineData.lines);
    lineData.lines.forEach((c) => {
      if (
        c.toString().split(',').includes(this.searchForm.value.formFrom) &&
        c.toString().split(',').includes(this.searchForm.value.formTo)
      ) {
        this.foundGuaguas.push(c);
      }
    });
    console.log(this.foundGuaguas);
  }
}
