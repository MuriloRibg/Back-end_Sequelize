const express = require("express");
const routes = require('./routes/index');

const app = express();
const port = 3000;

routes(app)

app.listen(port, ()=>{
    console.log("Sevidor rodando http://localhost:3000")
})

module.exports = app