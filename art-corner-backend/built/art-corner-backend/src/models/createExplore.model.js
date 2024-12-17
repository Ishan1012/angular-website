"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExploreModel = exports.ArtifactsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ArtifactsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    index: { type: Number, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    link: { type: String, default: '#' },
    like: { type: Boolean, default: false },
    bookmarks: { type: Boolean, default: false },
    time: { type: String, default: '' }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.CreateExploreModel = (0, mongoose_1.model)('artifacts', exports.ArtifactsSchema);
