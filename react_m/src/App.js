import React from "react";
import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😎</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
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

export default App;

/* span {
    font-size: 36px;
  }span:hover{
    font-size: 48px;
  }
  span:active{
    opacity: 0;
  } 
  
  &:hover === span:hover  <- 방법이 틀릴뿐 같은 말임
  */

/*
  
  1. 같은 컴포넌트를 사용하도 다른 배경색을 바꿀떄 쓰는방법

  const Box = styled.div`
    background-color : ${props => props.bgColor};
    width: 100px;
    height: 100px;
  `
  function App() {
    return{
      <Box bgColor="teal"/>
      <Box bgColor="tomato"/>
    }
  }

  위 방식처럼 사용한다면 
  props 를 인자로 받아서 box컴포넌트에 함수를 전달하여 만듬 
  props.bgColor 을 받게되면 Box 에 bgColor 라는 css 속성을주어 다른 속성들을 입힐수있음 
  ex) teal , tomato , fontsize , width 등등등 

  props 의 힘으로 컴포넌트를 설정하게 해줄수있음 

  
  */

/*
  
  2. 컴포넌트를 extend하는법 ( 컴포넌트에 다른 컴포넌트를 담는법 )
  
  extend = 컴포넌트의 모든 요소를 유지하면서 새로운 코드를 추가하는방법 

  const Box = styled.div`
    background-color : ${props => props.bgColor};
    width: 100px;
    height: 100px;
  `
  const Circle = styled.(Box)`
    border-radius: 50px;
  `
  function App() {
    return{
      <Box bgColor="teal"/>
      <Circle bgColor="tomato"/>
    }
  }

  위처럼 사용한다면
  Box 라는 컴포넌트가 2개인상태에서
  위에 박스는 Box라는 스타일컴포넌트에 teal이라는 색만 가진 사각형이고
  밑의 사이클이라는 컴포넌트는 Box라는 스타일컴포넌트에 Circle 이라는 스타일 컴포넌트를 추가로 집어넣어 적용된 모습임  

  추가 설명 : https://ko.reactjs.org/docs/composition-vs-inheritance.html ( 리액트 공식문서)
  
  */

/*
  
  3. styled component 자체를 타겟팅 할수있는방법

  box를 애니메이션을 주고 box안의 다른 컴포넌트를 선택햇을때 타겟을 직접 지정해주는 방법과 이름을 넣어 변수로 지정해주는방법이있다

  1. 직접 지정해주는방법 

  span:hover <- 이렇게 안의 태그를 직접 지정해주서 입력해주면된다
  하지만 span 에서 div나 p로 변경시에 hover를 지정해준값이 작동하지않는다

  2. 이름을 넣어 변수로 지정해주는방법


  const Emoji = styled.span
  ${Emoji}:hover 

  span으로 정해진 Emoji라는 변수를 사용하여 Emoji의 이름을 넣어주면 Emoji라는 이름의 변수의 사용이가능하다

  */

/*
  4. component의 모든걸 같게하고싶지만 html 태그만 바꿔 사용하는방법 

  const Btn = styled.button`
    color: tomato;
  `

  function App(){
    return 
      <Wrapper>
        <Btn>Log in</Btn>
        <Btn as="a">go back</Btn>
      </Wrapper>
  }
  
  export default App;

  위 처럼 사용한다 가정했을때 이름은 틀리지만 같은 버튼으로 볼수있다
  하지만 밑의 버튼에 as="a" 라고 하면 위의 버튼은 styled.button 으로 인식이되지만
  아래의 버튼은 styled.a 로 인식이된다

  
  */

/*
  
  스타일 컴포넌트 정리 

  평소 방식은 div 를 만들어서
  <div class=""><div> < 이런방식을 만드는 방법이었음 리액트 js에서는 이런방식을 사용하지않고 사용해보기로함

  styled component 를 사용하려면 styled를 import 하여 사용한다
  import 는 파일, 설정, 컴포넌트를 외부 파일이나 모듈에서 가져올 때 사용합니다.
  
  styled component를 사용하기위해선

  const Box = styled.div`` <- 이런방식으로 import 한 styled 을 적고 점을 찍은뒤 html 태그를 적은뒤 백틱을 넣고 안에 css사용할 속성을 넣어 사용한다



  */
