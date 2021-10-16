const express = require('express');
const app = express();


app.set("view engine","ejs");
app.set("views","views");

app.use("/",require('./routers/boot'));



app.listen(8000,console.log('runing in port 8000'));