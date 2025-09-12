const express = require("express");
const indexRouter = require('./routes/index.route');
const app = express();
app.use(express.json());
const port = 3000;

app.use('', indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
