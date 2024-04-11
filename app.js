const express = require("express");
const app = express();

const productRoutes = require("./routes/product");

const PORT = process.env.PORT || 5000;

app.get("/", (req , res) => {
    res.send("Hi, I am Live");
});

//Middleware to set routes:
app.use("/api/products", productRoutes);

const start = async()=>{
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
}
//Call:
start();