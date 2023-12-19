export type FollowUpType = {
    id: number;
    item: string;
    price: string;
};

export type RequestSchemaType = {
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
};

export type RequestSchemaTotalType = {
    ProductSpecific: RequestSchemaType;
    counter: number;
    followUp?: FollowUpType;
    observationText: string;
    total: string;
    nameClient: string,
    code: number
};