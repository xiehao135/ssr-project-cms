'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

/**
 *  author controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::author.author',
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
      return { data: removeAttrsAndId(removeTime(data)), meta };
  },
}));
