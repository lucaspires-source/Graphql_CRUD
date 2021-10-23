import {GraphQLObjectType, GraphQLID, GraphQLString} from 'graphql'

export const UserType = new GraphQLObjectType({
    name:"user",
    fields:() =>
    ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        username:{type:GraphQLID},
        password:{type:GraphQLString},
    })
})