const express  = require('express')
const routes = require('./routes/prouduct.routes')
const cors =require('cors')
const db  = require('./model/connect')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended :true}))
const corsOptions = {

origin : 'http://localhost:5432'

}
//app.use(cors(corsOptions))

db.sequelize.sync();

app.use('/api/products',routes)
//app.use('/api/users',userrotes)
//app.use('api/followre',rotue)



app.listen(3000,()=>{console.log("liseting in posrt 3000")})