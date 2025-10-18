const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

const notesRoutes = require("./routes/notesRoutes");
app.use("/", notesRoutes);

app.listen(3000, () => {
  console.log("Server is starting on port 3000");
});
