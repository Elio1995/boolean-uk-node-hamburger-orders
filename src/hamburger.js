const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3001;

const hamburgersRouter = require("./resources/hamburgers/routes");

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());

app.use("/hamburgers", hamburgersRouter);

app.listen(port, () => {
  console.log("request received");
});
