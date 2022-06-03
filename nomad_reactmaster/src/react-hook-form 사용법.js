/*

react-form 은 많은 form 을 가지고있거나 검증이 많을떄에 쓰기좋음

회원가입을 예를들면 아이디와 아이디 글자수 체크 및 이메일 , 이메일 검증 등등 
하나의 form 을 추가하고 검증하는데 코드가 길어지는데 이걸 줄여주는역활을함

리액트 훅 폼을 사용하기위해선 import useForm 연결을 해줘야함

useform 은 많은것들을 제공함 ( register  함수 )
register 함수의 사용으로 onChange 이벤트핸들러의 필요성이 사라짐 
(props 로 주는 값들도 마찬가지 ex: [item,setItem] = useState(""))

function ToDoList() {
  const { register, watch } = useForm();
  return (
    <div>
      <form>
        <input {...register("toDo")} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

위처럼 사용시 useState 나 onChange 를 사용하지않고 간결하게쓸수있음

또하나는 watch 를 제공함

watch 는 form 의 입력값들의 변화를 관찰할수있게 해주는 함수임 

input 에 값을 적기 시작하면 toDo를 키값으로 가지는 객체가 있으며 
toDo 키는 사용자가 적은 입력값을 value 값으로 가지고있음 

register로 한줄의 코드를 적기만하면 state를 만들어줌 

react-hook-form 을 쓰기전에는 onChange 이벤트함수를 만들고 input에 props를 줘서 사용하고 useState로 상태가 변할시 입력값을 가져오는 변수를 만들어줬지만
react-hook-form 을  사용하고서부턴 onChange 를 사용하지않고 register 로 사용하고 변화하는값을 watch 로 관찰하여 추적할수있음  

결과적으로 인풋이 하나밖에없을경우 react-hook-form 이 필요하지않을수도있음 여러개일경우 사용하기좋음

예를들어 로그인 페이지를 만들경우 사용자에게 입력값을 받아올수있는 인풋태그가 많아질것이고 상태륽 관리하기위한 useState변수와 입력값을 받아오기위해 생기는 변수가 많아져 코드가 길어짐
하지만 react-hook-form을 사용해서 위와같이 한개의 변수 사용줄(useform) 과 많은 인풋태그로 코드가 짧아질수있음 

즉 하나의코드로 여러가지의 input 을 다룰수있음

*/
