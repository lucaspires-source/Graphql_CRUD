import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { createConnection } from 'typeorm'
import {schema} from './schema'
import { Users } from './entities/users'
const main = async () =>{
await createConnection({
    type:"mysql",
    database:"graphqlcrud",
    username:"root",
    password:"123456",
    logging:true,
    synchronize:false,
    entities:[Users]
})    
const app = express()
app.use(cors())
app.use(express.json())
app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
}))


app.listen(3001,() =>{
    console.log("Server Running on PORT 3001")
})
}

main().catch((err) =>{
    console.log(err)
})