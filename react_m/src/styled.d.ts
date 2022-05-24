import "styled-components";

// declare module "styled-components" {
//   export interface DefaultTheme {
//     borderRadius: string;
//     color: {
//       main: string;
//       secondary: string;
//     };
//   }
// }

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}

/*
DefaultTheme는 인터페이스임 예전에 prop들을 위해서 만들었던 인터페이스와 유사함 

5번부터 9버까지는 테마가 어떻게 보일지를 설명하는부분임 
테마의 형태가 어떤 타입일지를

위 13 ~ 18까지는 작성한 스타일컴포넌트의 테마정의를 확장하는것임 
*/
