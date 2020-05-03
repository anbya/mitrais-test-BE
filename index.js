require('dotenv').config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const connection = require("./config/db")
const app = express()

const loginRouter = require("./routes/login")

const PORT = 8080

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

connection.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.get("/", function(req,res){
    res.send("Hello World dari mitrais test API");
})

app.use("/login", loginRouter);

app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`);
});