# AngularKline

This project uses [Angular](https://angular.dev/) as the front-end framework to build a simple k-line (candlestick chart) application.
The application features two pages: a main page for viewing the latest prices of cryptocurrencies, and a detail page for viewing the historical price data of a specific cryptocurrency selected from the main page.

* The cryptocurrency data is fetched from the [Binance Spot API](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md).
* The candlestick chart is rendered using the [lightweight-charts](https://github.com/tradingview/lightweight-charts) library.


---

Before you start, please ensure that your Node.js version is compatible with the Angular version used in this project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. 
The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. 
To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
