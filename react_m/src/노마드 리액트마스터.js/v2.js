/*

theme에 대해 배움 나중에 배울것과 합쳐서 dark 모드를 얻을수있음 


theme 이란?

기본적으로 모든 색상들을 가지고있는 object

theme 을 사용하기위해선 props로 ThemeProvider로 App 을감싸줘서 theme prop 넘겨줘야함 

index.js 에서에서

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

위왁 같이 App에 props로  theme 변수 darkTheme , lightTheme 등을 보내주면

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


const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

위와같이 App이라는 화면에서 props로  textColor 와 backgroundColor 등을 사용하여 색을 변경이 가능하다

상단 컴포넌트의 속성을 props로 받아와서 하단의 컴포넌트의 css를 변경이 가능하다 

theme 사용법

1. property  몇개를 가진 object 를 가지고있어야한다
2. object 를 ThemeProvider에 전달한다
3. ThemeProvider안에 있는 모든 component들은 위에 만들었던 object에 접근이 가능하다 
4. object 안에 property 의 이름이 같다면 theme={darkTheme} 을 전환했을때 componet를 따로 바꿔줄필요가 없다
(왜냐하면 property의 이름이 같기떄문) 

dark/light 모드를 가지고싶다면 property 들의 이름이 똑같아야함
(darkTheme의 property중 글자색이 textColor 면  lightTheme의 property도 textColor 여야한다  )
이렇게 사용해야 App.js에서 component를 변경하지않고 사용하여 
background-color: ${(props) => props.theme.backgroundColor}
위 코드에서 어떤 Theme인지 추적할필요가없다

*/
