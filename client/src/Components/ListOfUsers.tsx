import React from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_USER } from "../Graphql/Mutation";
function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);
  const [deleteUser, { error }] = useMutation(DELETE_USER);
  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <>
              <div>
                {" "}
                Id:{user.id}
                <br />
                Name:{user.name}
                <br />
                Username:{user.username}
                <br />
                <button
                  onClick={() => {
                    deleteUser({ variables: { id: user.id } });
                  }}
                >
                  Delete User
                </button>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default ListOfUsers;
