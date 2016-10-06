/**
 * Controler for home component
 * @module home.controller
 */

/**
 * Class representing a controller for home component
 */
export default class {

  /**
   * Use the $inject property to ensure proper functionality after minification
   * @param {I18nService} i18nService - to change language.
   */
  static get $inject() {
    return ['i18nService']
  }

  /**
   * Create a controler for home component
   * @param {Rest} args - extended parameters with injected dependencies
   */
  constructor(...args) {
    // Dependencies
    [this.i18nService] = args
  }

  /**
   * Change app langage
   * @param {String} lang - code of language to change
   */
  changeLanguage(lang) {
    this.i18nService.changeLanguage(lang)
  }
}