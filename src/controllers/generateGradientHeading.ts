import { Request, Response } from "express";
import { createGradientHeading } from "../services/gradientHeadingService";

export const generateGradientHeading = async (req: Request, res: Response) => {
  try {
    const { title, size = "100" } = req.query;

    const sizeNum = Number(size);

    if (!title || typeof title !== "string") {
      throw Error("Missing or invalid parameters");
    }

    if (
      isNaN(sizeNum) ||
      sizeNum <= 0 ||
      sizeNum > 100 ||
      !Number.isInteger(sizeNum)
    ) {
      throw Error("Invalid size: Size must be a positive integer <=100");
    }

    const svg = createGradientHeading(title, sizeNum); // TODO:: colors: string[] and other params
    res.setHeader("Content-Type", "image/svg+xml");

    res.status(200).send(svg);
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message);
  }
};
