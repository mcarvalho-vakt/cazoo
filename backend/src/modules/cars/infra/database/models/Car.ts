import mongoose, { Schema } from 'mongoose';
import ICar from '../interfaces/ICar';

const CarSchema: Schema = new Schema({
    maker: { type: String, required: true},
    modelName: { type: String, required: true},
    year: { type: String, required: true},
    color: { type: String, required: true},
    monthly: { type: Number, required: true},
    available: { type: Date, required: true},
},
{
    timestamps: true
});

export default mongoose.model<ICar>('Car', CarSchema);