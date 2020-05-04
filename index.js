require('dotenv').config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

const loginRouter = require("./routes/register")

const PORT = process.env.PORT || 8080

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.send("Hello World dari mitrais test API");
})

app.use("/register", loginRouter);

app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`);
});