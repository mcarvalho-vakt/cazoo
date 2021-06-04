import {Document, ObjectId} from 'mongoose';

export default interface ICar extends Document {
    maker: string;
    modelName: string;
    year: string;
    color: string;
    monthly: number;
    available: Date;
};
