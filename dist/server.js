"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const headingRoutes_1 = __importDefault(require("./routes/headingRoutes"));
// import generateSVG from './utils/svgGenerator';
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (_, res) => {
    res.send("Health: OK");
});
app.use("/api/headings", headingRoutes_1.default);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map