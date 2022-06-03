/*

react-form 은 많은 form 을 가지고있거나 검증이 많을떄에 쓰기좋음

회원가입을 예를들면 아이디와 아이디 글자수 체크 및 이메일 , 이메일 검증 등등 
하나의 form 을 추가하고 검증하는데 코드가 길어지는데 이걸 줄여주는역활을함

리액트 훅 폼을 사용하기위해선 import useForm 연결을 해줘야함

  기존 방식 = react-hook-form

1. onChage = register
2. usState =  watch 
3. onSubmit = hadleSubmit 


1. onChage = register


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



2. usState =  watch 


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

3. onSubmit = hadleSubmit 

handleSubmit 는 validation ( 확인 ) 을 담당함 , 이벤트를 preventDefault 하는것도 담당함 

event.preventDefault() 는  어떤 이벤트를 명시적으로 처리하지않는 경우 해당 이벤트에 대한 사용자의 기본동작을 실행되지않도록 지정하는것

이전에 사용했었던 이유는 이벤트가 중복처리되서 사용하게되었음 

handleSubmit 은 2개의 인자를 받음 

1. 데이터가 유효할떄 호출되는 함수 = onValid
2. 데이터가 유효하지않을떄 호출되는 함수  = onInvalid

onInvalid ( 유효하지않을떄 호출되는 함수) 는 필수는 아니지만 onValid ( 유효한 ) 는 필수임

button으로 onSubmit 이 실행되면 handleSubmit가 실행되면서 마지막으로 onValid 가 불린다

const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

 <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />

  위와 같이 작성되면 handleSubmit 인하여 작동된다

  handleSubmit 은 required 나 minLength , maxLength 등이 있으며 2가지 방법이 있다

  {required : true} <- 이와 같이 사용시 적용된 input 값이 필수로 들어가야한다 
  {required:" your password empty "} <- 이와 같이 사용시 적용된 input 값이 없을경우 유저에게 보여줄 화면에 나올 에러객체에 들어가게된다 

  minLength 에는 2가지의 옵션이있다 하나는 최소 글자수를 보내는거고 다른 하나는 객체를 보내는거다 
  객체안에는 값을 보낼수있고 유저한테 메세지를 보낼수도있다 

  또다른 확인 ( 검증 ) 방법이있는데 그건 정규식을 사용하는 방법이다  ( RegExp )
   
  required : true가 있으면  비어있지않으면 통과되고 비어있으면 submit 버튼을 눌러도 통과되지않는다
  required: true, minLength: 10 <- 이렇게되어있으면 10글자까지 작성해야 submit 버튼을 누를수있고
  { required: true, minLength: 5 } <- 5글자 제한이다

  {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}

  위와같이 있으면 패스워드1 에 글자수 5글자제한에 메세지로 Your password is too short 라고 보내지게되며 모든조건이 통과시 submit버튼을 눌러 정보를 보낼수있다


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>

  위와 같이 사용시 인풋의 적는값은 password 고 필수사항으로 write here 을 보여주고 최소길이 5자이상으로 잡아주며
  그냥 제출시 errors가 보여 write here 이 보일수있도록 만든 코드이다 

*/
