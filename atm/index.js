const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

const atmRoutes = require('./routes/atmRoutes');
app.use('/', atmRoutes);

app.listen(PORT, () => {
  console.log(`ATM Server is started at http://localhost:${PORT}`);
});
