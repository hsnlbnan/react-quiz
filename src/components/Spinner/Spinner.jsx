import React from "react";
import styled, { keyframes } from "styled-components";

const move = keyframes`
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(0, 20px);
        }
        100% {
            transform: translate(0, 0);
        }
        `;
const SpinnerCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid #fff;
  border-top: 10px solid #9da3fa;
  animation: ${move} 1s ease-in-out infinite;
  margin: 0 auto;
`;
const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerCircle />
    </SpinnerContainer>
  );
};
