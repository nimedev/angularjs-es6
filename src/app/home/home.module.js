/**
 * Module for home component.
 * @module home.module
 */

// Dependencies
import angular from 'angular'
import { homeComponent } from './home.component'
import homeConfig from './home.config'

/**
 * Module name
 */
export default angular
  .module('home', [])
  .component('ajsHome', homeComponent)
  .config(homeConfig)
  .name