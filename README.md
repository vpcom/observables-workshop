# observables-workshop

## Description

Observables, Subjects, Behavior Subjects and even Promises put on a benchmark.

The Observables Workshop is an attempt to showcase simple asynchronous ways to display data on a web page.
You have heard of Observables, Subjects, Behavior Subjects and Promises. Which one to use, and why?


## TL;DR

It is easy to realise that Behavior Subjects are the most convenient ones to display data provided by a standard HTTP request.
Promises perform also fairly well for such simple cases.
If the data to display is relatively simple, using the Async pipe is convenient because it manages the unsubscription of Observables. But if the variable can be usefull to manage your state component, you can consider storing it in a variable and unsubscribe during the onDetroy cycle event.

## How to use

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).




New organisation:

1 - Async pipe value

2 - Cold or hot when re-asking value

3 - Maybe cold or hot when hidden field