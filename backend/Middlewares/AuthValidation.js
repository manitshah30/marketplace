const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required()
            .messages({
                'string.base': '"Name" should be a type of text',
                'string.empty': '"Name" cannot be empty',
                'string.min': '"Name" should have a minimum length of {#limit}',
                'any.required': '"Name" is required'
            }),
        email: Joi.string().email().required()
            .messages({
                'string.email': '"Email" must be a valid email address',
                'any.required': '"Email" is required'
            }),
        password: Joi.string().min(4).max(100).required()
            .messages({
                'string.min': '"Password" should have a minimum length of {#limit}',
                'any.required': '"Password" is required'
            })
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400)
            .json({
                message: "Bad request",
                details: error.details
            });
    }
    next();
}

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required()
            .messages({
                'string.email': '"Email" must be a valid email address',
                'any.required': '"Email" is required'
            }),
        password: Joi.string().min(4).max(100).required()
            .messages({
                'string.min': '"Password" should have a minimum length of {#limit}',
                'any.required': '"Password" is required'
            })
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400)
            .json({
                message: "Bad request",
                details: error.details
            });
    }
    next();
}

module.exports = {
    signupValidation,
    loginValidation
}
