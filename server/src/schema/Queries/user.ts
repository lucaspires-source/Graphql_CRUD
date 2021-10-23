import { GraphQLList } from "graphql";
import { Users } from "../../entities/users";
import { UserType } from "../TypeDefs/user";



export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve(){
        return Users.find()
    }
}