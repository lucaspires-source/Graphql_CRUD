import React from 'react'
import {GET_ALL_USERS} from '../Graphql/Queries'
import {useQuery} from '@apollo/client'
function ListOfUsers() {
    const {data,error} = useQuery(GET_ALL_USERS)
        console.log(data)

    return (
        <div>
            {data && (data.getAllUsers.map((user:any) =>{
                return (
                    <><div>{" "} Name:{user.name}<br />Username:{user.username}</div><div>---------------------------</div></>
                )
            }))}
        </div>
    )
}

export default ListOfUsers
