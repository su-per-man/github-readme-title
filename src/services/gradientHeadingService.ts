import { generateGradientHeadingSVG } from "../utils/svgGenerator";

export const createGradientHeading = (title: string, size: number) => {
  return generateGradientHeadingSVG(title, size);
};
