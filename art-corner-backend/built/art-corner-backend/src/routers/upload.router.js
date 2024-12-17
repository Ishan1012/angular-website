"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_2 = require("express");
var path_1 = __importDefault(require("path"));
var router = (0, express_2.Router)();
router.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
router.get('/uploads/:filename', function (req, res) {
    var filePath = path_1.default.join(__dirname, 'uploads', req.params.filename);
    res.sendFile(filePath);
});
