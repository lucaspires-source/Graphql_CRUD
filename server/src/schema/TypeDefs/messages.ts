import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean} from 'graphql'

export const MessageType = new GraphQLObjectType({
    name:"message",
    fields:() =>
    ({
        sucessful:{type:GraphQLBoolean},
        message:{type:GraphQLString}
    })
})