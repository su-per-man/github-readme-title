import express, { Response } from "express";
import headingRoutes from "./routes/headingRoutes";
// import generateSVG from './utils/svgGenerator';

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res: Response) => {
  res.send("Health: OK");
});

app.use("/api/headings", headingRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
