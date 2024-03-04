import express, { Request, Response } from "express";
import headingRoutes from "./routes/headingRoutes";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (_req: Request, res: Response) => {
  return res.send("App Running...");
});

app.use("/api/headings", headingRoutes);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
