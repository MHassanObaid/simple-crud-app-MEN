const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("HELLO FROM asd NODE API ad");
});
//GET ALL PRODCTs
// in controller

//UPDATE
//in controller

//DELETE
//in controller

//GET ONE PRODUCT
//in controller

//CREATE A PRODUCT
//in controller

mongoose
  .connect(
    "mongodb+srv://hassanobaid10109145:iBFo8FH0xW9YzkGd@backenddb.wcvjmw9.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Servub is running on 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
