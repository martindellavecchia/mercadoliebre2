const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.listen(process.env.PORT || 3000, () => {                        //levanta el servidor usando una variable de entorno O el puerto 3000
    console.log("Servidor corriendo en el puerto 3000...")
})
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})
app.post("/login", (req, res) =>{
    console.log(req.body)
    res.redirect("/");
})

app.post("/register", (req, res) =>{
    console.log(req.body)
    res.redirect("/");
})
