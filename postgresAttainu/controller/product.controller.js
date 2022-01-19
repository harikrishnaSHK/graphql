const db = require('../model/connect')

const Product = db.products

//Inserting data into PostgreSQL

exports.createProduct = async (req,res)=>{


console.log(req.body)   

const product = {

name : req.body.name,
cost : req.body.cost



}
try{
const data  = await Product.create(product)

res.json({

    data : data,
    sucess:true
    
    
    })
}
catch(err){

    console.log(err)

    res.json({

      

        data : "No data is sent",
        sucess:false,
        
        
        })


}






}

//Method to fetch all the details
exports.getProducts = async (req,res)=>{


    try{
        
 const data  = await Product.findAll()


console.log(data);

 res.json({
 data :data,
 sucess :true
 })


    }

    catch(err){

 res.json({

data:"Error in fecting",
sucess :false

 })



    }


}

//Update method to update the tutorial
exports.updateProducts = async (req,res)=>{
const id  = req.params.id

try{

const data = await Product.update(req.body,{where:{id : id}})

res.json({

data :data,
sucess:true

})
}
catch(err){

res.json({

data :err,
sucess:false

})


}



}

//delet the product

exports.deleteProducts = async (req,res)=>{

const id  = req.params.id
try{

const data = await Product.destroy({where:{id:id}})
res.json({

data:`product with id ${id} is deleted`,
sucess:true

})

}

catch(err){

res.json({

data:err,
sucess:false


})

}

}