const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    user: Joi.string().required(),
    title: Joi.string().required(),
    type: Joi.string().required(),
    code: Joi.string().allow("", null),
  }).required(),
});
