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

const Wrapper = styled.div`
  background: #fafafe;
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  border: 1px solid #fff;
  width: 80%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px 0 #e9eaff;
  border-radius: 10px;
  z-index: 1;
`;

const Circle1 = styled.div`
  background-color: #9da3fa;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  left: 100px;
  animation: ${move} 5s ease-in-out infinite;
`;

const Circle2 = styled.div`
  background-color: #9da3fa;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  bottom: -40px;
  right: 60px;
  animation: ${move} 10s ease-in-out infinite;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Layout = ({ children }) => {
  return (
    <Container>
      <Circle1 />
      <Wrapper>{children}</Wrapper>
      <Circle2 />
    </Container>
  );
};

export default Layout;
