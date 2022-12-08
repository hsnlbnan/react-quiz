import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Spinner } from "../Spinner/Spinner";
import {
  border,
  borderRadius,
  color,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  minWidth,
  maxWidth,
  space,
  textAlign,
  width,
  system,
} from "styled-system";
import { buttonSize, buttonStyle } from "../../constants/theme";

const bgColor = system({
  backgroundColor: {
    property: "backgroundColor",
    scale: "color",
  },
});

const StyledButtonContent = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  outline: 0;
  ${bgColor}
  ${buttonStyle}
  ${buttonSize}
  ${border}
  ${borderRadius}
  ${color}
  ${display}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${minWidth}
  ${maxWidth}
  ${space}
  ${textAlign}
  ${width}

  ${(props) =>
    props.asLink &&
    css`
      background: none !important;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
    `}

    @media (max-width: 768px) {
    ${(props) =>
      css`
        width: 100% !important;
      `}
  }
`;

const StyledButton = ({ loading, ...props }) =>
  !loading ? (
    <StyledButtonContent {...props} />
  ) : (
    <StyledButtonContent {...props}>
      <Spinner />
    </StyledButtonContent>
  );

StyledButton.propTypes = {
  /** @ignore */
  blacklist: PropTypes.arrayOf(PropTypes.string),

  buttonSize: PropTypes.oneOf(["small", "medium", "large"]),

  buttonStyle: PropTypes.oneOf(["primary", "standard", "outline"]),

  display: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),

  fontWeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),

  minWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),

  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),

  space: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),

  textAlign: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),

  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),

  loading: PropTypes.bool,
  asLink: PropTypes.bool,
};

StyledButton.defaultProps = {
  buttonSize: "medium",
  buttonStyle: "standard",
  loading: false,
};

/** @component */
export default StyledButton;
