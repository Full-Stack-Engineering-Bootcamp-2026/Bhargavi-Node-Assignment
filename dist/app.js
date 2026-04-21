"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mailRoutes_1 = __importDefault(require("./routes/mailRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
// 🔹 View engine setup (EJS)
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../src/views"));
// 🔹 Middleware
app.use(express_1.default.urlencoded({ extended: true })); // for form data
app.use(express_1.default.json());
// 🔹 Routes
app.use("/", mailRoutes_1.default);
// 🔹 Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
