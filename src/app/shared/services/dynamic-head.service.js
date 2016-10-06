/**
 * Service used to create a listener to change dinamically the title and meta
 * tags of a page.
 * You must start this service calling start method in $postLink hook of root
 * component.
 * To add dynamic title and meta, add a custom object in route configuration.
   $stateProvider
    .state(stateName, {
      url: '/',
      template: '<home></home>',
      data: {
        dynamicHead: {
          title: 'I18N.TITLE.NAMESPACE',
          description: 'I18N.DESCRIPTION.NAMESPACE'
        }
      }
    })
 *
 * @module dynamic-head.service
 */

// Module constants
const defaultTitle = 'HOME.HEAD_TITLE'
const defaultDescription = 'HOME.HEAD_DESCRIPTION'

/**
 * Class representing a dynamicHead Service constructor function
 */
export class DynamicHeadService {

  /**
   * Use the $inject property to ensure proper functionality after minification
   * @param {IRootScopeService} $rootScope - to register events handlers.
   * @param {Object} $state - to get current state object
   * @param {IWindowService} $window - to change page title.
   * @param {I18nService} i18nService - to get text for head.
   */
  static get $inject() {
    return ['$rootScope', '$state', '$window', 'i18nService']
  }

  /**
   * Create a dynamicHead Service
   * @param {Rest} args - extended parameters with injected dependencies
   */
  constructor(...args) {
    // Dependencies
    [
      this.$rootScope,
      this.$state,
      this.$window,
      this.i18nService
    ] = args
  }

  /**
   * Create listener to change head dynamically
   */
  create() {
    // Update head elements after view change.
    this.$rootScope.$on('$stateChangeSuccess', (event, toState) => {
      this.update(toState)
    })

    // Update head elements when change language.
    this.$rootScope.$on('i18nTextsLoaded', () => this.update())
  }

  /**
   * Update head elements
   * @param state - current state object.
   */
  update(state = this.$state) {

    // Try to get de data to change from state object
    const dynamicHead = state.data ? state.data.dynamicHead : {}
    let title = dynamicHead.title || defaultTitle
    let description = dynamicHead.description || defaultDescription

    // Get translations
    title = this.i18nService.texts[title]
    description = this.i18nService.texts[description]

    // Change the title
    this.$window.document.title = title

    // Change meta description
    const metaDescription = this.$window.document
      .querySelector('meta[name=description]')
    metaDescription && metaDescription.setAttribute('content', description)
  }
}