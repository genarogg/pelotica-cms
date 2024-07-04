'use strict';

/**
 * delegado service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::delegado.delegado');
