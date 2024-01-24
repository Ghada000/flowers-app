const express = require("express");
const cors = require("cors");
const recepieRoutes=require('./routes/recipiesRoute')

const app = express();
const PORT = 4000;

app.use(cors()); 
app.use(express.json());

app.use('/api',recepieRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});