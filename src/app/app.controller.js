/**
 * Controler for app component
 * @module app.controller
 */

/**
 * Class representing a controller for app component
 */
export default class {

  /**
   * Use the $inject property to ensure proper functionality after minification
   */
  static get $inject() {
    return ['$log', 'constants', 'dynamicHeadService', 'i18nService']
  }

  /**
   * Create a controller
   * @param {ILogService} $log - to log in debug mode.
   * @param {Object} constants - to log constants object in some environments.
   * @param {DynamicHeadService} dynamicHeadService - to add listeners for
   *  this component.
   * @param {I18nService} i18nService - to load i18n text.
   */
  constructor($log, constants, dynamicHeadService, i18nService) {
    // Dependencies
    this.$log = $log
    this.constants = constants
    this.dynamicHeadService = dynamicHeadService
    this.i18nService = i18nService
  }

  /**
   * Component initialization
   */
  $onInit() {
    // Get i18n texts and load dynamic head elements.
    this.i18nService.load()
      .then(() => this.dynamicHeadService.update())

    // Log constants object
    this.$log.debug('Constants object', this.constants)
  }

  /**
   * When component is linked
   */
  $postLink() {
    // Start listener for dynamicHeadService
    this.dynamicHeadService.create()
  }
}