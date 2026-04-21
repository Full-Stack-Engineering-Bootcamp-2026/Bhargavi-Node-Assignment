"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mailController_1 = require("../controllers/mailController");
const validation_1 = require("../middleware/validation");
const router = express_1.default.Router();
// Show form
router.get("/", (req, res) => {
    res.render("index", { errors: null });
});
// Handle form submit
router.post("/send-mail", validation_1.mailValidation, mailController_1.sendMailController);
exports.default = router;
