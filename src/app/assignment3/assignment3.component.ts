import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .white {
      color: white;
    }
  `]
})
export class Assignment3Component implements OnInit {
  visible = false;
  count = 0;
  btnClicks = [];

  constructor() { }

  onClick = () => {
    this.visible = (this.visible) ? false : true;
    this.count++;
    this.btnClicks.push(this.count);
  }

  getCurrentClick = () => {
    return this.count;
  }

  ngOnInit() {
  }

}
