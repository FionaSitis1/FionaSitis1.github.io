## To update next chapter:

1. Pull origin from both `gh-pages` and `develop` branch 
2. Navigate to `develop` branch: 
3. To update new chapter: 
* On folder assets
    *  In `novel.json`, change the update date
    *  Under respective novel chapter, change in both `chp.jso` and `file.ts`
* Run `git add .`
* Run `git commit -m "COMMIT MESSAGE"`
* Run `git push origin develop`
4. In github, create new `pull request` (third tab), merge `develop` to `gh-pages`
5. In local folder, run `git checkout gh-pages` and `git pull origin`
6. Run `ng build --output-path docs --base-href /FionaSitis1.github.io/`
7. Repeat same old task, find docs/index.html and delete contents in `href` until `<base href="/">`
8. git add, commit add, no surprise. 
9. Updated

## To update dependences
1. On latest updated branch
2. Delete folder node_modules
3. Run `npm cache clean —force`
4. Run `npm install `

# Fish

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
