'use strict';

/**
 * forgetpassword service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forgetpassword.forgetpassword');
