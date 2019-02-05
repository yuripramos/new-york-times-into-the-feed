const path = require("path");
/*eslint-disable*/

const express = require("express");
const app = express(),
  DIST_DIR = path.resolve(__dirname, "../build/"),
  HTML_FILE = path.join(DIST_DIR, "index.html");
app.use(express.static(DIST_DIR));
app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}/nyttop ....`);
  console.log("Press Ctrl+C to quit.");
});
