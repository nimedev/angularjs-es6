/**
 * Service to get i18n text.
 * @module i18n.service
 */

// Dependencies
import angular from 'angular'

/**
 * Class representing a i18nService constructor function
 */
export class I18nService {

  /**
   * Use the $inject property to ensure proper functionality after minification
   * @param {ILogService} $log - to log in development mode.
   * @param {IRootScopeService} $rootScope - to emit events.
   * @param {Object} $translate - to get i18n texts using translate service
   *  and change language.
   */
  static get $inject() {
    return ['$log', '$rootScope', '$translate']
  }

  /**
   * Create a i18nService
   * @param {Rest} args - extended parameters with injected dependencies
   */
  constructor(...args) {
    // Dependencies
    [
      this.$log,
      this.$rootScope,
      this.$translate
    ] = args

    // Store text loaded by service function
    this.texts = []
  }

  /**
   * Change app langage
   * @param {String} lang - code of language to change
   */
  changeLanguage(lang) {
    this.$translate.use(lang)
      .then(() => this.load())
  }

  /**
   * Get app texts
   */
  load() {
    return this.$translate([
      'HOME.HEAD_TITLE',
      'HOME.HEAD_DESCRIPTION'
    ]).then(translations => {
      angular.copy(translations, this.texts)
      this.$rootScope.$emit('i18nTextsLoaded')
      this.$log.debug('[i18n.service] loaded!')
      return this.texts
    })
  }
}