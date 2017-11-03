import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'unknown';

  constructor() {
    setTimeout(() => this.allowNewServer = true , 3000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created.`;
  }

  onUpdateServerName($event: Event) {
    this.serverName = (<HTMLInputElement>$event.target).value;
    console.log(this.serverName);
  }

  ngOnInit() {}
}
