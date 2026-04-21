"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailValidation = void 0;
const express_validator_1 = require("express-validator");
exports.mailValidation = [
    (0, express_validator_1.body)("email")
        .isEmail()
        .withMessage("Please enter a valid email"),
    (0, express_validator_1.body)("subject")
        .notEmpty()
        .withMessage("Subject is required"),
    (0, express_validator_1.body)("message")
        .isLength({ min: 10 })
        .withMessage("Message must be at least 10 characters"),
];
