import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

// const urlLogger = (req, res, next) => {
//   console.log(`PATH: ${req.url}`);
//   next();
// };

// const timeLogger = (req, res, next) => {
//   const date = new Date();
//   const year = console.log(
//     `Time: ${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`
//   );
//   next();
// };

// const securityLogger = (req, res, next) => {
//   const protocol = req.protocol;
//   if (protocol === "https") {
//     console.log("secure");
//   } else {
//     console.log("insecure");
//   }
//   next();
// };

const protectorMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};

const handleHome = (req, res) => {
  return res.end();
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(logger);
// app.use(urlLogger);
// app.use(timeLogger);
// app.use(securityLogger);
app.use(protectorMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
