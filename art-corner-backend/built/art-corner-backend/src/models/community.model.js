"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityModel = exports.CommunitySchema = void 0;
var mongoose_1 = require("mongoose");
exports.CommunitySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    members: { type: [], default: [] },
    desc: { type: String, required: true },
    img: { type: String, required: true }
});
exports.CommunityModel = (0, mongoose_1.model)('community', exports.CommunitySchema);
