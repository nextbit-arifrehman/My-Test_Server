const express = require("express")
const testdata = require("./test.json")

const app = express();

app.get("/",(req,res) => {
    res.send("My test servsser is running")
})

app.get("/testdata/:id",(req,res) => {
    const id=parseInt(req.params.id);
    console.log(id, "aita id")
    const testata = testdata.find(item => item.id === id) || {};
    res.send(testata)
})

app.listen(5000, () => {
    console.log(`server running on port 5000`)
})