const express = require("express")
const port = process.env.PORT || 3000

const app = express()

app.set("view engine", "hbs")

app.use(express.static("public"))


app.get("/", (req, res) => {
    res.render("index.hbs")
})

app.get("/date", (req, res) => {
    res.render("date.hbs")
})

app.get("/buttons", (req, res) => {
    res.render("buttons.hbs")
})



app.listen(port, (e)=>{
    if (e) {
        console.log("ERROR\n\n\n" + e)
    }
    console.log("Server is running!")
})