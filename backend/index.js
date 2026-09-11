import express from "express";

const expresscontainer = express()
expresscontainer.use(express.json())
const PORT = 3000
const products = [{
    id:"1",
    name: "testproduct",
    price:49.99,
    quantity:1
},
{   id:"2",
    name: "testproduct2",
    price:49.999,
    quantity:1
}
]
//read all products
expresscontainer.get("/products", (req, res) => res.json(products))

// read products by id
expresscontainer.get("/products/:id" , (req, res) =>  {
  const found = products.find(p=> p.id === req.params.id)

  if (found) {
    res.json(found)
  } else {
    res.status(404).json({ message: "product not found" })
  }
})

//create product
expresscontainer.post("/products",(req,res)=>{
    const{name,price,quantity =1 } = req.body
    const newproducts = { 
    id:String(Date.now()),
    name: name,
    price:price,
    quantity:quantity
    };

    products.push(newproducts);
    res.status(201).json(newproducts)
})
// update prduct
expresscontainer.put("/products/:id" , (req, res) =>  {
  const foundIndex = products.findIndex(p=> p.id === req.params.id)
  if(foundIndex !== -1)
  {

  }else{
    res.status(404).json({message:"products not found"})
  }
})





expresscontainer.get("/",(req,res)=>{res.json({message : "tung tung tung sahur"})})
expresscontainer.listen(PORT, () => {console.log(`Server is running on PORT: ${PORT}🌎`)})

