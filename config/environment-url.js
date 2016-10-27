/**
 * Return the url of the resources according with environment.
 * @module environment-url
 * @memberOf config
 */
'use strict'

// npm modules
const ip = require('ip')

/**
 * Ulrs for each resource of the webapplication
 */
module.exports = {
  /** Url for api */
  apiUrl: process.env.ANGULARJS_ES6_API_URL || `http://${ip.address()}:${8080}/api`
}