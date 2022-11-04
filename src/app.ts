import doetenv from "dotenv";
import express from "express";
import { port } from "./utils/env/env";

doetenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log(`Server is running on localhost:${port}`));
