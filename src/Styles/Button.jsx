import styled from "styled-components";
import { color, space, fontSize, buttonStyle } from "styled-system";

const ButtonStyled = styled.button`
  border: 0;
  outline: 0;
  ${color}
  ${space}
  ${fontSize}
   ${buttonStyle}
   border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #7b7ff2;
  }
  padding: 10px 20px;
`;
ButtonStyled.defaultProps = {
  variant: "primary",
  backgroundColor: "#727AF0",
  color: "white",
  fontSize: "1rem",
};

export default ButtonStyled;
