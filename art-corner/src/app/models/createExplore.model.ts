import { model, Schema } from "mongoose";

export interface CreateExplore {
    [x: string]: any;
    id: number;
    index: number;
    title: string;
    desc: string;
    img: string;
    link: string;
    like: boolean;
    bookmark: boolean;
    time: string;
}

export const ArtifactsSchema = new Schema<CreateExplore>(
    {
        title: {type: String, required: true},
        index: {type: Number, required: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        link: {type: String, default: '#'},
        like: {type: Boolean,default: false},
        bookmarks: {type: Boolean,default: false},
        time: {type: String,default: ''}
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

export const CreateExploreModel = model<CreateExplore>('artifacts', ArtifactsSchema);