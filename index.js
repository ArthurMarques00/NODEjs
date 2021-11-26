const express = require('express');
const consing = require("consign");
const bodyParse = require('body-parser');

let app = express();

app.use(bodyParse.urlencoded({exteded: false}))
app.use(bodyParse.json())
consing().include('routes').include('ultils').into(app);

app.listen(3000,"127.0.0.1",()=>{

    console.log('servidor rodando!');

});