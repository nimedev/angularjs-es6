/**
 * Module for app component.
 * @module app.module
 */

// Dependencies
import angular from 'angular'
import ngCookies from 'angular-cookies'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'
import ngTranslate from 'angular-translate'
import 'angular-translate-handler-log'
import 'angular-translate-loader-static-files'
import 'angular-translate-storage-cookie'
import 'angular-translate-storage-local'
import { appComponent } from './app.component'
import appConfig from './app.config'

// Feature modules
import { baseModule } from './base'
import { homeModule } from './home'

// Shared feature modules
import { directivesModule } from './shared/directives'
import { interceptorModule } from './shared/interceptor'
import { servicesModule } from './shared/services'

// Application constants
import appConstants from './app.constants'

// Component prefix
const prefix = 'app'

/**
 * Module name
 */
export default angular
  .module('app', [
    // Dependencies
    ngCookies,
    ngMessages,
    uiRouter,
    ngTranslate,

    // Feature Modules
    baseModule,
    homeModule,

    // Shared
    directivesModule,
    interceptorModule,
    servicesModule
  ])
  .component(`${prefix}Root`, appComponent)
  .config(appConfig)
  .constant('constants', appConstants)
  .name