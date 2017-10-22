import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  pageIndex = 0;

  constructor() {
  }

  nextPage() {
    this.pageIndex = 1;
  }

  ngOnInit() {
  }

}
