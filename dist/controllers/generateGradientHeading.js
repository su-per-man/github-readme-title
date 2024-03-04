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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGradientHeading = void 0;
const gradientHeadingService_1 = require("../services/gradientHeadingService");
const generateGradientHeading = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, size = "100" } = req.query;
        const sizeNum = Number(size);
        if (!title || typeof title !== "string") {
            throw Error("Missing or invalid parameters");
        }
        if (isNaN(sizeNum) ||
            sizeNum <= 0 ||
            sizeNum > 100 ||
            !Number.isInteger(sizeNum)) {
            throw Error("Invalid size: Size must be a positive integer <=100");
        }
        const svg = (0, gradientHeadingService_1.createGradientHeading)(title, sizeNum); // TODO:: colors: string[] and other params
        res.setHeader("Content-Type", "image/svg+xml");
        res.status(200).send(svg);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).send(error.message);
    }
});
exports.generateGradientHeading = generateGradientHeading;
//# sourceMappingURL=generateGradientHeading.js.map