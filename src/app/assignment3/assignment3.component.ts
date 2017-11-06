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
  btnClicks = [];

  constructor() { }

  onClick = () => {
    this.visible = (this.visible) ? false : true;
    this.btnClicks.push(new Date ());
  }

  ngOnInit() {
  }

}
