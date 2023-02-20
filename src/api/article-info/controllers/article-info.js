"use strict";
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

/**
 *  article-info controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::article-info.article-info",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: "deep",
      };
      const { data, meta } = await super.find(ctx);
      return { data: removeAttrsAndId(removeTime(data)), meta };
    },
    async findOne(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: "deep",
      };
      const { data, meta } = await super.findOne(ctx);
      return removeAttrsAndId(removeTime(data));
    },
  })
);
