import { model, Schema } from "mongoose";

export interface Feedback{
    id: string;
    name: string;
    email: string;
    subject: string;
    description: string;
}

export const FeedbackSchema = new Schema<Feedback>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    subject: {type: String, required: true},
    description: {type: String, required: true}
},{
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

export const FeedbackModel = model<Feedback>('feedback', FeedbackSchema);