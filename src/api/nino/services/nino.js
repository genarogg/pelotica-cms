'use strict';

/**
 * nino service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nino.nino');
