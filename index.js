const express = require("express");
const createError = require("http-errors");
const dotenv = require("dotenv").config();
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:3000",
}))

require("./initDB")();

const bike = require("./routes/bike.route");

// const school = require("./routes/school.route");

// const major = require("./routes/major.route");

app.use("/bike-service", bike);

// app.use("/schools-service", school);

// app.use("/majors-service", major);

app.use((req, res, next) => {
  res.status(404);
  res.send({ error: "Not found" });
});

app.use((req, res, next) => {
  next(createError(404, "Not found"));
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port 8888.....");
});
