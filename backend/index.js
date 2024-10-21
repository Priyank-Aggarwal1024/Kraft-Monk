const express = require("express");
require("dotenv").config();
const app = express();
const { PORT } = process.env
const cors = require("cors");
const { applyRouter } = require("./routes/applyRoute");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", applyRouter);


app.listen(PORT, () => {
    console.log(`Server is listening on port = ${PORT}`);
})
