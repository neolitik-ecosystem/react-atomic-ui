import PropTypes from "prop-types";
import styled from "react-emotion";
import { darken } from "polished";
import * as colors from "../../../styles/colors";
import * as buttonSizes from "./sizes";
import {
  getColorsOptions,
  getButtonSizesOptions
} from "../../../styles/helpers";

function setDisplay({ size }) {
  return size === "fullWidth" ? "block" : "inline-block";
}
function setWidth({ size }) {
  return size === "fullWidth" ? "100%" : "initial";
}

const Button = styled("button")(
  {
    border: "none",
    borderRadius: "2px",
    cursor: "pointer",
    fontWeight: "200",
    margin: "8px 0",
    outline: "none",
    transition: "all 300ms ease"
  },
  props => ({
    background: colors[props.bgColor],
    color: colors[props.fontColor],
    display: setDisplay(props.size),
    fontSize: buttonSizes[props.size]["font-size"],
    lineHeight: buttonSizes[props.size]["line-height"],
    padding: buttonSizes[props.size]["padding"],
    width: setWidth(props.size),
    ":hover": {
      background: darken(0.1, colors[props.bgColor])
    }
  })
);

Button.defaultProps = {
  children: "This is a button",
  bgColor: "blue",
  fontColor: "white",
  size: "medium"
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.oneOf(getColorsOptions()),
  fontColor: PropTypes.oneOf(getColorsOptions()),
  size: PropTypes.oneOf(getButtonSizesOptions())
};

export default Button;
