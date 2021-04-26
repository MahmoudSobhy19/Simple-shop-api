const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let products = [
    {
        id: "001",
        productname: "Iphone 11 Pro",
        category: "Mobile"
    },
    {
        id: "002",
        productname: "Hp ProBook G6",
        category: "Labtop"
    }, 
    {
        id: "003",
        productname: "Headphone",
        category: "Sound"
    }, 
    {
        id: "004",
        productname: "MI 10T",
        category: "Mobile"
    }
]

let shoppingcart = []

// [1] add new products
app.use(bodyParser.json())

app.post("/products", (req, res) => {
    products.push(req.body)
    res.send(products)
})


// [2] retrive all products
app.get("/products", (req, res) => {
    res.json(products)
})

// [3] retireve spacific product by id
app.get("/products/:id", (req, res) => {
    res.json(products.filter(el => el.id === req.params.id))
})

// [4] add product to shopping cart
app.post("/shoppingcart", (req, res) => {
    shoppingcart.push(req.body)
    res.send(shoppingcart)
})

//LISTEN
app.listen(3500, () => {
    console.log("Server running...")
})