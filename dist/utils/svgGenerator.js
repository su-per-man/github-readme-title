"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGradientHeadingSVG = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("../config/constants");
const generateGradientHeadingSVG = (title, size) => {
    // TODO:: colors: string[]
    const svgTemplate = getSVGTemplate(constants_1.GRADIENT_HEADING_1);
    return svgTemplate
        .replace(constants_1.templateValues.title, title)
        .replace(constants_1.templateValues.size, size.toString());
};
exports.generateGradientHeadingSVG = generateGradientHeadingSVG;
const getSVGTemplate = (template) => {
    const templatePath = path_1.default.join(__dirname, template);
    try {
        const svgTemplate = fs_1.default.readFileSync(templatePath, {
            encoding: constants_1.DEFAULT_ENCODING,
        });
        return svgTemplate;
    }
    catch (error) {
        console.error("Error reading SVG template:", error);
        throw new Error("Internal Problem");
    }
};
//# sourceMappingURL=svgGenerator.js.map