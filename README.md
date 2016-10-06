# AngularJS ES6

> A starting point for building web applications with AngularJS 1.5 using ES6, Webpack and PostCSS.


## Prerequisites

- [Node.js](https://nodejs.org/en/download/).
- [npm](https://www.npmjs.com/), installed with Node.js.


## Install dependencies

#### 1) Check Node.js version.
```sh
node --version
```
The version should be at or above 6.7.0

#### 2) If you don't have Node.js intalled go to [nodejs](https://nodejs.org/en/download/) and install the appropiate version or use [nvm](http://www.sergiolepore.net/2014/06/30/nvm-instalando-y-usando-node-version-manager/) (Recommended).

#### 3) Install the workspace `npm` dependencies.
```sh
# cd to your project folder
npm install
```

#### 4) (Optional) Install a manager for TypeScript definitions `typings`.

You can use `typings` for intellisense (I use this in VScode).

```sh
npm install typings -g
# cd to your project folder
typings install
```

This create a typings folder which you can reference in your JavaScript files to get intellisense.


## Workflow

### Environment variables

- Environment: `NODE_ENV`='development'
- Webapplication dev server: `ANGULARJS_ES6_HOST`=localIP and `ANGULARJS_ES6_PORT`=3000
- API url: `ANGULARJS_ES6_API_HOST`=localIP and `ANGULARJS_ES6_API_PORT`=8080

To change any of this variables:

```sh
export ANGULARJS_ES6_PORT=8000
```

### Development workflow

#### Static server with live reload
```sh
# cd to your project folder
npm start
# After this, a message indicate the url to run the application
```
This create a server using `webpack-dev-server` to serve the application in development environment.  
The browser reloads the app when any file change.

### Production workflow
```sh
# cd to your project folder
# Set environment variable for production
export NODE_ENV='production'

# Build
npm run build
```
Put all in `dist` folder ready for production.

### Install/Uninstall/Update dependencies
Follow this rules to update dependencies:

- Uninstall old dependency and install again

```sh
# cd to your project folder
npm uninstall eslint && npm install eslint -D
```

### Others scripts

To run all linters:

```sh
# cd to your project folder
npm run lint
```


## Styling

#### CSS Framework **[niduscss-framework](https://github.com/nimedev/niduscss-framework)**.

#### Naming conventions **[SuitCSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)**.

## Angular HTML5 mode or pretty URLs

This mode is set by default. If use it consider this:

- All call related to links like `href="/link/to/anyware"`, `$location.path('/link/to');`, etc. result as a hit to server. Use it only for SEO porpuses.
- To avoid unnecesary hits to server (SPA) you can use `ui-sref="/link/to"` in html files or `$state` service in angular files.


## Editors
This project is configured to use with `VScode`. Also contain pre-configured task for development. See `.vscode` folder to explore the options.


## [Contributing](CONTRIBUTING.md)


## [Changelog](CHANGELOG.md)


## [License](LICENSE.md)