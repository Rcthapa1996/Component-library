import React from "react";
import PropsType from "prop-types";
import "./myButton.css";

export const MyButton = ({ color }) => {
  return <button class={`my-button ${color} btn`}>Click Me</button>;
};
// export default MyButton;
MyButton.propTypes = {
  color: PropsType.string,
};

MyButton.defaultProps = {
  color: "red",
};
