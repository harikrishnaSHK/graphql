const {Users} = require('../data')

console.log(Users)

const resolvers = {

Query : {

getUsers :()=>{


return Users

},

getUser :(parent,args)=>{

const id  = args.id
const user = Users.find(users=>users.id == id)
return user
console.log(user)

}


},

Mutation :{

addUser :(parent,args)=>{

const user = {

id :args.id,
name:args.name,
gender:args.gender,
age:args.age

}

Users.push(user)
return user


},

updateUser:(parent,args)=>{

const id  = args.id
const newName = args.newName
let updateUser
Users.forEach((user)=>{

if(user.id === Number(id)){

user.name = newName
updateUser = user
}

})

return updateUser

},

deleteUser:(parent,args)=>{

const id  = args.id
let newUser = Users.filter((user)=>user.id !==Number(id))
console.log(newUser)
return null


}



}



}

module.exports = {resolvers}