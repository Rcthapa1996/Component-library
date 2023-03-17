import React from "react";
import PropTypes from "prop-types";
import "./cpButton.css";

export const CpButton = ({
  bgColor,
  padding,
  size,
  hasDropDown,
  icon,
  btnName,
}) => {
  return (
    <button
      class={`cp-button p-${padding} btn-${size} ${bgColor} ${
        hasDropDown ? "hasDropDown" : ""
      }`}
    >
      {icon}
      {btnName}
    </button>
  );
};
export default CpButton;

CpButton.propTypes = {
  bgColor: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  hasDropDown: PropTypes.bool,
  icon: PropTypes.element,
  btnName: PropTypes.string,
};

CpButton.defaultProps = {
  bgColor: "gray",
  padding: "15",
  size: "small",
  hasDropDown: false,
  icon: <h5>Hello</h5>,
  btnName: "Save",
};
