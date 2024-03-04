"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generateGradientHeading_1 = require("../controllers/generateGradientHeading");
const router = express_1.default.Router();
router.get('/gradient', generateGradientHeading_1.generateGradientHeading);
exports.default = router;
//# sourceMappingURL=headingRoutes.js.map