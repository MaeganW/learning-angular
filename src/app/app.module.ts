import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { UsernameComponent } from './username/username.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment3TextComponent } from './assignment3-text/assignment3-text.component';
import { Assignment3textComponent } from './assignment3text/assignment3text.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UsernameComponent,
    Assignment3Component,
    Assignment3TextComponent,
    Assignment3textComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
