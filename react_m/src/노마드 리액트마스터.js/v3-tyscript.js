/*

스타일컴포넌트와 타입스크립스 연결을 하는 지시를 해봄

npm install @types/styled-components

파일의 형식은 styled.d.ts 와 theme.ts 라는 형식으로 만들어지게됨

스타일컴포넌트를 적용시켜 사용하게될 styled.d.ts 파일에  적용시킬 타입들의 속성들을 집어넣어 사용할수있으며
theme.ts 파일에 사용시 타입을 적어논것들을 같이 적어놓아야 에러를 뱉지않음 
( 타입의 속성이 빠진다면 theme.ts 에서 오류를 발생시켜 실수를 발생시키지않음)

적용시키는 방법은 theme에서 공부했듯이 ThemeProvider에 임포트하여 연결해줘야함

<ThemeProvider theme={lightTheme}>

위처럼 가져온다면 아래의 컴포넌트에서도 프롭스의 theme속성을 사용이 가능하다

 */
