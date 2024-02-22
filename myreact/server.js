const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hello from server!");
});
app.get("/getdata", function (req, res) {
    var data = { name: "majdoleen", age: "20", password: "1234" }
    res.json(data)
})
app.get("/getprice", function (req, res) {
    var p = { price1: "10$", price2: "20$", price3: "30$", price4: "40$" }
    res.json(p)
})
var server = app.listen(5000, function () {
    var host = server.address().address // local one  
    var port = server.address().port
})

