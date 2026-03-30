import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//fucks all the file in src
app.use(express.static(path.join(__dirname, "src")));

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`),
);
