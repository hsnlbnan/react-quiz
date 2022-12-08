import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import StyledButton from "../Button/Button";
import { colors, textStyle } from "../../constants/theme";

const H2 = styled.h2`
  ${textStyle}
  text-align: center;

  color: ${colors.primary[500]};
  padding: 12px 20px;
  border-radius: 100px;
`;

export const Quiz = () => {
  return (
    <>
      <H2>Quiz</H2>
      <Link to="/question">
        <StyledButton
          buttonStyle="primary"
          buttonSize="large"
          justifyContent="center"
        >
          Başla
        </StyledButton>
      </Link>
    </>
  );
};

export default Quiz;
