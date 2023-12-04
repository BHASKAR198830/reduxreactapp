import React from "react";

const User = (props) => {
  console.log(props);
  return (
    <div>
      <h1>User component</h1>
      <h2>Name : {props.data.name}</h2>
      <h2>Car : {props.data.car}</h2>
    </div>
  );
};
export default User;
