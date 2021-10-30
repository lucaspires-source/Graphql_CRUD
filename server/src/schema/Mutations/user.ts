import { GraphQLID, GraphQLString } from "graphql";
import { Users } from "../../entities/users";
import { MessageType } from "../TypeDefs/messages";
import { UserType } from "../TypeDefs/user";


export const CREATE_USER ={
    type: UserType,
    args:{
        name:{type:GraphQLString},
        username:{type:GraphQLString},
        password:{type:GraphQLString},
    },
    async resolve(parent:any,args:any){
        const {name,username,password} = args
        await Users.insert({name,username,password})
        return args
    }
}

export const DELETE_USER = {
    type:MessageType,
    args:{
        id:{ type :GraphQLID}
    },
    async resolve(parent:any,args:any){
        const id = args.id
        await Users.delete(id)
        return {sucessful:true, message:"USER SUCCESSFULLY DELETED"}
    }

}

export const UPDATE_PASSWORD = {
    type:MessageType,
    args:{
        username:{type:GraphQLString},
        oldPassword:{type:GraphQLString},
        newPassword:{type:GraphQLString},
    },
    async resolve(parent:any,args:any){
        const {username, oldPassword ,newPassword} = args
        const user = await Users.findOne({username:username})
        const userPassword = user?.password;
        if(!user) {
            throw new Error("PASSWORDS DO NOT MATCH")
        }else {
            if(oldPassword === userPassword){
                //@TODO UPDATE DE INSERT USER MUTATION TO AVOID USERS HAVING THE SAME USERNAME
                await Users.update({username:username},{password:newPassword} )
                return {sucessful:true, message:"PASSWORLD SUCCESSFULLY UPDATED"}
            }else{
                throw new Error("PASSWORDS DO NOT MATCH")
            }
        }

    }

}