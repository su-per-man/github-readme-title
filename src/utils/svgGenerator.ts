import fs from "fs";
import path from "path";
import {
  DEFAULT_ENCODING,
  GRADIENT_HEADING_1,
  templateValues,
} from "../config/constants";

export const generateGradientHeadingSVG = (
  title: string,
  size: number
): string => {
  // TODO:: colors: string[]

  const svgTemplate = getSVGTemplate(GRADIENT_HEADING_1);
  return svgTemplate
    .replace(templateValues.title, title)
    .replace(templateValues.size, size.toString());
};

const getSVGTemplate = (template: string): string => {
  const templatePath = path.join(__dirname, template);
  try {
    const svgTemplate = fs.readFileSync(templatePath, {
      encoding: DEFAULT_ENCODING,
    });
    return svgTemplate;
  } catch (error) {
    console.error("Error reading SVG template:", error);
    throw new Error("Internal Problem");
  }
};
