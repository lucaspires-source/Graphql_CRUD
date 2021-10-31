import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";

function UpdatePassword() {
  const [userName, setUserName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  return (
    <div className="updateUser">
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Insert your old password"
        onChange={(e) => {
            setOldPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Insert Your new password"
        onChange={(e) => {
        setNewPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          updatePassword({
            variables: { username: userName, oldPassword: oldPassword , newPassword:newPassword},
          });
        }}
      >
        Update Password
      </button>
    </div>
  );
}

export default UpdatePassword;
