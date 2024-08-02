import cors from "cors";
import express from "express";
import router from "./routes/AllRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(3500, () => console.log(`app running on ${3500}`));
