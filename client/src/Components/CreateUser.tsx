import React, { useState } from "react";
import {
  useMutation,
} from "@apollo/client";
import { CREATE_USER } from "../Graphql/Mutation";
function CreateUser() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [createUser, { error }] = useMutation(CREATE_USER);
  return (
    <div className="createUser">
    <input
      type="text"
      placeholder="name"
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
    <input
      type="text"
      placeholder="username"
      onChange={(e) => {
        setUserName(e.target.value);
      }}
    />
    <input
      type="password"
      placeholder="password"
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    />
    <button
      onClick={() => {
        createUser({
          variables: { name: name, username: userName, password: password },
        });
      }}
    >
      Create User
    </button>
  </div>

  )
}

export default CreateUser