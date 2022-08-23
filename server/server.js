const app = require("./app");
const db = require("./db/index");
require("dotenv").config();

const PORT = process.env.PORT;

db.on("error", console.error.bind(console, "connection error:"));

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
