
const express = require('express')
const app = express()
const port = 5000
const mongodb = require("./db")
mongodb();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  next();

});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use("/c", require("./routes/Createuser"));
app.use("/c", require("./routes/Displaydata"));
app.use("/c", require("./routes/Orderdata"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


