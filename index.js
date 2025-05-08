const express = require("express")
const testdata = require("./test.json")

const app = express();

app.get("/",(req,res) => {
    res.send("My test servsser is running")
})

app.get("/testdata",(req,res) => {
    res.send(testdata);
})

app.listen(5000, () => {
    console.log(`server running on port 5000`)
})