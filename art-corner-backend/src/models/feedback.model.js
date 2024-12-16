"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackModel = exports.FeedbackSchema = void 0;
var mongoose_1 = require("mongoose");
exports.FeedbackSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    subject: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.FeedbackModel = (0, mongoose_1.model)('feedback', exports.FeedbackSchema);
