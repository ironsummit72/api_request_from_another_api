const express = require("express");
const app = express();
const port = 3000;
const EXTERNAL_API_URL = ""; //enter any url which sends json response 
app.get("/", (req, res) => {
  fetch(EXTERNAL_API_URL)
    .then((data) => data.json())
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({ message: `Error Occured ${err}` });
    });
});
app.listen(port, () => {
  console.log(`listening on  localhost:${port}`);
});
