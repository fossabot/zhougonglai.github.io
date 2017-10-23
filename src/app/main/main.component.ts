import { Component, OnInit, ViewChild } from '@angular/core';
import { SwitchPagesDirective } from '../shared/switch-pages/switch-pages.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  focus = false;
  constructor() {
  }

  onFocus() {
    this.focus = true;
  }

  onBlur() {
    this.focus = false;
  }

  ngOnInit() {
  }

}
