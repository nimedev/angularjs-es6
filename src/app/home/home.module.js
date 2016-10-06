/**
 * Module for home component.
 * @module home.module
 */

// Dependencies
import angular from 'angular'
import { homeComponent } from './home.component'
import homeConfig from './home.config'

// Component prefix
const prefix = 'ats'

/**
 * Module name
 */
export default angular
  .module('home', [])
  .component(`${prefix}Home`, homeComponent)
  .config(homeConfig)
  .name