'use strict';
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");
/**
 *  category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
    'api::category.category', 
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
        const { data, meta } = await super.findOne(ctx);
        return removeAttrsAndId(removeTime(data));
    },
    })
);
