const express = require("express");
require("dotenv").config();
const port = process.env.port || 80;
const app = express();
const { saludo, mensaje } = require("./middlewares");

app.get("/", saludo, (req, res) => {
    res.send("TE ENCUENTRAS EN RAIZ\n")
})
app.get("/home", mensaje, (req, res) => {
    res.send("TE ENCUENTRAS EN HOME\n")
})

app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});