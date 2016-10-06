/**
 * Main module used to bootstrap de application
 * @module main
 */

// Dependencies
import angular from 'angular'
import './styles/style.css'

// Application component
import { appModule } from './app'

// Configurations
import appConfig from './app/app.constants'

// Constants
const appName = appConfig.appName

// Variables
let htmlDocument
let startApp

// Define angular app.
angular
  .module(appName, [appModule])

// Load app when document is ready
htmlDocument = angular.element(document)

startApp = () => angular.bootstrap(htmlDocument, [appName])

htmlDocument.ready(startApp)