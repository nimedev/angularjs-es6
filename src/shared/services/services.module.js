/**
 * Group shared services for all app
 * @module services
 */

// Dependencies
import angular from 'angular'

// Feature modules

// Shared services
import { DynamicHeadService } from './dynamic-head.service'
import { I18nService } from './i18n.service'
import { StylesService } from './styles.service'

/**
 * Module name
 */
export default angular
  .module('services', [])
  .service('dynamicHeadService', DynamicHeadService)
  .service('i18nService', I18nService)
  .service('stylesService', StylesService)
  .name