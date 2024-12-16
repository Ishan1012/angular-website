"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersModel = exports.NewslettersSchema = void 0;
var mongoose_1 = require("mongoose");
exports.NewslettersSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.NewslettersModel = (0, mongoose_1.model)('newsletters', exports.NewslettersSchema);
