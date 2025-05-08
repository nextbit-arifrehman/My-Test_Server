import express from "express"

const app = express();

app.get("/",(req,res) => {
    res.send("My test server is running")
})

app.listen(5000, () => {
    console.log(`server running on port 5000`)
})