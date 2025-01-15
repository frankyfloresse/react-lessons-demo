import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/^\w{4,}$/).required().messages({
        'string.pattern.base': 'only chars allowed and this must be at least 4 char'
    }),
    password: Joi.string().min(3).max(6).required().messages({
        'string.min': 'pass can be 3 chars',
        'string.max': 'pass cannot be greater than 6 chars',
    }),
    age: Joi.number().min(1).max(117).required().messages({
        'number.min': 'age can be 1 chars',
        'number.max': 'age cannot be greater than 117 chars',
    }),
});

export default userValidator;