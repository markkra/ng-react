# NgReact2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1 followed by an ng eject.

## Development server

Run `ng start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng run build`. The build artifacts will be stored in the `dist/` directory.
Run `ng run build:prod` to generate a production build 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## See
https://facebook.github.io/react/docs/integrating-with-other-libraries.html#integrating-with-other-view-libraries

## Steps to configure an angular-cli app to host a React component

1. npm install -g angular-cli
2. ng new myAngularReactHostApp
3. cd myAngularReactHostApp
4. ng eject: updates the npm build scripts and exposes the webpack.config.js file.
5. npm install —save react react-dom @types/node @types/react @types/react-dom web pack
6. npm install --save-dev ts-node tslint tslint-loader tslint-react
7. Update the tsconfig.json compiler options node with "jsx" : "react"
8. Update the "resolve" node in webpack.config.js to include extensions .tsx, .ts, .jsx, and .js
9. Update the "module" node in the webpack.config.js to test for ts, tsx, and jsx extensions. { "test": /\.ts|tsx|jsx$/, "loader": "@ngtools/webpack"}
10. Create React files with a tsx file extension
