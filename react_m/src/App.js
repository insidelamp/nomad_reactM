import React from "react";
import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const rotationAnimation = keyframes`
 0%{
   transform: rotate(0deg);
   border-radius: 0px;
 }
 50%{
  border-radius: 100px;
 }
 100%{
   transform: rotate(360deg);
   border-radius: 0px;
 }
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 100px;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

export default App;
