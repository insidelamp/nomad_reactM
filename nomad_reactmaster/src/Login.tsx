import React, { useState } from "react";
import styled from "styled-components";
import { emailCheck, passwordCheck, phoneCheck, nickCheck } from "./common";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [phoneNumber, setPhonNumber] = useState("");
  const [toDo, setToDo] = useState("");

  const submit = () => {
    if (userEmail === "" || password === "" || nickname === "" || phoneNumber) {
      window.alert("입력칸들을 전부 입력해주세요!");
    }
    if (!emailCheck(userEmail)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    if (!passwordCheck(password)) {
      window.alert(
        "비밀번호는 숫자와 문자 포함 형태의 6~12자리 이내로 가능합니다!"
      );
      return;
    }
    if (!nickCheck(nickname)) {
      window.alert("닉네임은 한글, 영문, 숫자만 가능하며 2-10자리 가능합니다!");
      return;
    }
    if (!phoneCheck(phoneNumber)) {
      window.alert("핸드폰번호는 000-0000-0000 의 형태로 숫자를 입력해주세요");
      return;
    }
  };

  const onEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUserEmail(value);
  };
  const onPwChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };
  const onNickChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setNickName(value);
  };
  const onPhonChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPhonNumber(value);
  };
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userEmail);
    console.log(password);
    console.log(nickname);
    console.log(phoneNumber);
    console.log(toDo);
  };
  return (
    <div>
      <FormMain onSubmit={onSubmit}>
        <input
          onChange={onEmailChange}
          value={userEmail}
          placeholder={"이메일을 입력해주세요"}
        />
        <input
          onChange={onPwChange}
          value={password}
          placeholder={"비밀번호를 입력해주세요"}
        />
        <input
          onChange={onNickChange}
          value={nickname}
          placeholder={"별명을 입력해주세요"}
        />
        <input
          onChange={onPhonChange}
          value={phoneNumber}
          placeholder={"핸드폰 번호를  입력해주세요"}
        />
        <input
          onChange={onChange}
          value={toDo}
          placeholder="내용을 입력해주세요"
        />
        <button onClick={submit}>제출하기</button>
      </FormMain>
    </div>
  );
}

const FormMain = styled.form`
  width: 30vh;
  height: 30px;
  display: flex;
  flex-direction: column;
  margin: 300px 0px 0px 100px;
`;

export default Login;
