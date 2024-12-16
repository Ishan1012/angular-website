import { model, Schema } from "mongoose";

export interface Community{
    id: number;
    name: string;
    members: [];
    desc: string;
    img: string;
}

export const CommunitySchema = new Schema<Community>({
    name: {type: String, required: true},
    members: {type: [], default: []},
    desc: {type: String, required: true},
    img: {type: String, required: true}
})

export const CommunityModel = model<Community>('community',CommunitySchema);