const express = require('express');
const app = express();
const PORT = 4200;

app.use(express.json());

const libraryRoutes = require('./routes/libraryRoutes');
app.use('/', libraryRoutes);

app.listen(PORT, (err) => {
    if(err){
        console.log("Error found" ,err)
    }
    else{
        console.log(`Library Server is started at http://localhost:${PORT}`);
    }
  
});
