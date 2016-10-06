/**
 * Root component
 * @module app.component
 */

// Dependencies
import controller from './app.controller'

/**
 * Component object
 */
export const appComponent = {
  controller,
  template: '<main ui-view autoscroll></main>'
}