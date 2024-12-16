"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var initialArtifacts_1 = require("../initialArtifacts");
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var createExplore_model_1 = require("../models/createExplore.model");
var multer_1 = __importDefault(require("multer"));
var http_status_1 = require("../constants/http_status");
var urls_1 = require("../constants/urls");
var router = (0, express_1.Router)();
router.get("/seed", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var artifactsCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, createExplore_model_1.CreateExploreModel.countDocuments()];
            case 1:
                artifactsCount = _a.sent();
                if (artifactsCount > 0) {
                    res.send("Seed is already done!");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, createExplore_model_1.CreateExploreModel.create(initialArtifacts_1.initialArtifacts)];
            case 2:
                _a.sent();
                res.send("Seed is Done!");
                return [2 /*return*/];
        }
    });
}); }));
router.get("/", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var artifacts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, createExplore_model_1.CreateExploreModel.find()];
            case 1:
                artifacts = _a.sent();
                res.send(artifacts);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/:artifactid", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, createExplore_model_1.CreateExploreModel.findById(req.params.artifactid)];
            case 1:
                item = _a.sent();
                res.send(item);
                return [2 /*return*/];
        }
    });
}); }));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Folder where files will be saved
    },
    filename: function (req, file, cb) {
        cb(null, "".concat(Date.now(), "-").concat(file.originalname)); // Unique filename
    }
});
var fileFilter = function (req, file, cb) {
    var allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file
    }
    else {
        cb(new Error('Invalid file type. Only JPEG and PNG files are allowed.'));
    }
};
var upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 11 * 1024 * 1024 }, // Limit file size to 5MB
});
router.post("/post-artifact", upload.single('img'), (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, desc, img, item, countDoc, newItem, dbItem;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, title = _a.title, desc = _a.desc;
                img = (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename;
                if (!title || !desc || !img) {
                    res.status(http_status_1.HTTP_BAD_REQUEST).send('All fields are required, including the image.');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, createExplore_model_1.CreateExploreModel.findOne({ img: img })];
            case 1:
                item = _c.sent();
                if (item) {
                    res.status(http_status_1.HTTP_BAD_REQUEST)
                        .send('Image already exists, please insert another image!');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, createExplore_model_1.CreateExploreModel.countDocuments()];
            case 2:
                countDoc = _c.sent();
                newItem = {
                    id: '',
                    title: title,
                    index: countDoc + 1,
                    desc: desc,
                    img: "".concat(urls_1.BASE_URL).concat(img), // Save the relative path in the database
                    link: "#",
                    like: false,
                    bookmark: false,
                    time: ""
                };
                return [4 /*yield*/, createExplore_model_1.CreateExploreModel.create(newItem)];
            case 3:
                dbItem = _c.sent();
                res.send(generateTokenResponse(dbItem));
                return [2 /*return*/];
        }
    });
}); }));
var generateTokenResponse = function (item) {
    var token = jsonwebtoken_1.default.sign({
        title: item.title, index: item.index
    }, "SomeRandomText");
    item.token = token;
    return item;
};
router.get("/search/:searchTerm", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchRegex, artifacts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRegex = new RegExp(req.params.searchTerm, 'i');
                return [4 /*yield*/, createExplore_model_1.CreateExploreModel.find({ title: { $regex: searchRegex } })];
            case 1:
                artifacts = _a.sent();
                res.send(artifacts);
                return [2 /*return*/];
        }
    });
}); }));
exports.default = router;
