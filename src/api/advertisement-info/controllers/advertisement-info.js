'use strict';
const {removeTime, removeAttrsAndId} = require("../../../utils/index")
/**
 *  advertisement-info controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::advertisement-info.advertisement-info', ({ strapi }) => ({
    async find(ctx){
        ctx.query = {
            ...ctx.query,
            populate: "deep"
        };
        const { data } = await super.find(ctx);
        return removeAttrsAndId(removeTime(data[0]));
    }
}));
