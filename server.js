const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

const notesRoutes = require("./routes/notesRoutes");
app.use("/", notesRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
    });
});

app.listen(3000, () => {
    console.log("Server is starting on port 3000");
});
