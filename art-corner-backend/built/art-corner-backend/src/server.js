"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var artifacts_router_1 = __importDefault(require("./routers/artifacts.router"));
var community_router_1 = __importDefault(require("./routers/community.router"));
var user_router_1 = __importDefault(require("./routers/user.router"));
var database_config_1 = require("./configs/database.config");
var path_1 = __importDefault(require("path"));
var urls_1 = require("./constants/urls");
var feedback_router_1 = __importDefault(require("./routers/feedback.router"));
var newsletters_router_1 = __importDefault(require("./routers/newsletters.router"));
(0, database_config_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["https://art-corner.vercel.app"]
}));
app.use("/api/artifacts", artifacts_router_1.default);
app.use("/api/community", community_router_1.default);
app.use("/api/user", user_router_1.default);
app.use("/api/feedback", feedback_router_1.default);
app.use("/api/newsletters", newsletters_router_1.default);
// Serve static files from the uploads folder
app.use('/api/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
// Example: Route to test if image is accessible
app.get('/api/uploads/:filename', function (req, res) {
    var filePath = path_1.default.join(__dirname, 'uploads', req.params.filename);
    res.sendFile(filePath);
});
app.listen(urls_1.PORT, function () {
    console.log("Website served on http://localhost:" + urls_1.PORT);
});
