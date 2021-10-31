import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
    query getAllUsers{
        getAllUsers{
            name
            username
            id
            password
        }

    }
`;
