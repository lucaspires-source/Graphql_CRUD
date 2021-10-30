import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_USER, DELETE_USER } from "./Mutations/user";
import { GET_ALL_USERS } from "./Queries/user";
const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        getAllUsers:GET_ALL_USERS
    }
})

const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createUser:CREATE_USER,
        deleteUser:DELETE_USER
    }
})


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
})