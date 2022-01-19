

module.exports = (sequelize ,Sequelize) =>{

const Product = sequelize.define("product",{

name:{
type : Sequelize.STRING
},
cost:{

type :Sequelize.STRING

}



})


return Product

}