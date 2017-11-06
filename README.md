# AngularAppOne

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## command notes

ng server - runs the app
ng new - creates a new app
ng g c {nameofnewcomponent} - creates a new component

## general notes

FormModules - must be added to the app.module.ts imports array
Can add style libraries like bootstrap to the angular-cli.json file like this:

      "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],

ngIf and ng-template

      <!-- <p *ngIf="serverCreated; else noServer">A server was created.  It's name is {{ serverName }}.</p>
      <ng-template #noServer>
        <p>A server has not yet been created.</p>
      </ng-template> -->


