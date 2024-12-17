import { model, Schema } from "mongoose";

export interface Newsletters {
    id: '',
    title: string,
    desc: string
}

export const NewslettersSchema = new Schema<Newsletters>(
    {
        title: {type: String, required: true},
        desc: {type: String, required: true},
    },{
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
);

export const NewslettersModel = model<Newsletters>('newsletters', NewslettersSchema);