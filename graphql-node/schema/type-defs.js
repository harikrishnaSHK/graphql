const {gql}  = require('apollo-server')

const typeDefs =  gql`

type User {

id :ID!
name :String!
gender:Gender!
age:Int!

}

type Query {

getUsers : [User!]!
getUser(id :ID!) : User!


}

input CreateUser{
    id:ID! 
    name :String!
    gender:Gender = male
    age:Int!

}

type Mutation{

addUser(input : CreateUser!) :User
updateUser(id :ID! newName :String!) :User
deleteUser(id:ID!):User

}

enum Gender {
male
female
others

}

` 



module.exports = {typeDefs}