import React from "react";
import styled from "styled-components";
import { textStyle } from "../../constants/theme";

const P = styled.p`
  ${textStyle}
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 400px;
  background-color: #fff;
  border-radius: 6px;
  padding: 45px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 80%;
`;

export const QuestionWrapper = ({ children }) => {
  return (
    <Wrapper>
      <P>{children}</P>
    </Wrapper>
  );
};

export default QuestionWrapper;
