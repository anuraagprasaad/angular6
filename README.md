# Weblog

A simple blog application using Angular 6, Typescript, Bootstrap 4 & Google Firebase for authentication and storage.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.
Currently it supports registration, login and an inital dashboard functionalites.
More functionalities will be added soon.

## Firebase setup
After setting up your dev environment, you are going to create a free Firebase account. To do this, visit the page https://firebase.google.com/ and Log in to your account (or create a new one).

Click on the Add Firebase to your web app button and a pop up with your app credentials will be shown. 

The pop up will have the following information about your new Firebase App. Copy this information to environment.ts file located in src/environments/environment.ts as shown below:

export const environment = {
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID"
  }
};

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
