import Joi from 'joi';


export const RequestSchema = Joi.object({
    id: Joi.number().required(),
    image: Joi.string().uri().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required()
});

export const FollowUp = Joi.object({
    id: Joi.number().required(),
    item: Joi.string().required(),
    price: Joi.string().required()
});

const FollowUpArray = Joi.array().items(FollowUp);

export const RequestSchemaTotal = Joi.array().items(
    Joi.object({
        ProductSpecific: RequestSchema.required(),
        counter: Joi.number().required(),
        followUp: FollowUpArray,
        observationText: Joi.string().allow(''),
        total: Joi.string().required(),
        nameClient: Joi.string().required(),
        code: Joi.number().required(),
    })
);

export const CodeSchema = Joi.object({
    idcode: Joi.number().required(),
});

export const ReadySchema = Joi.object({
    code: Joi.number(),
});



