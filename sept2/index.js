const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/pub', express.static('public'));

const indexRoutes = require('./routes/index.route');
app.use('/api', indexRoutes);

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log(` Server started at http://localhost:${PORT}`);
    }
});
