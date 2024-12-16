import { model, Schema } from "mongoose";

export interface User{
    id: string;
    email: string;
    password: string;
    name: string;
    isAdmin: boolean;
    img: string;
}

export const UserSchema = new Schema<User>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    img: {type: String, default: './profiles/profile1.png'},
    isAdmin: {type: Boolean, default: false}
},{
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

export const UserModel = model<User>('user', UserSchema);