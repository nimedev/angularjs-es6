/**
 * Angular module to attach interceptors.
 * @module interceptor
 */

// Dependencies
import angular from 'angular'
// import errorInterceptorFactory from './error-interceptor.factory'

/**
 * Module name
 */
export default angular
  .module('interceptor', [])
  .config(['$httpProvider', () => {
    // Attach error interceptor service to the http response
    // $httpProvider.interceptors.push(errorInterceptorFactory)
  }])
  .name