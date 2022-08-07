import React, { useState, useEffect } from "react";
import {
  LoginBox,
  LoginForm,
  InputBox,
  LoginInput,
  LoginText,
  LoginButton,
  ValidWord,
} from "./index.style";

interface UserLogin {
  email: string;
  password: string;
}

interface LoginValid {
  idValid: boolean;
  pwValid: boolean;
}

function Login() {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [valid, setValid] = useState<LoginValid>({
    idValid: false,
    pwValid: false,
  });
  const [loginInfo, setLoginInfo] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((cur): UserLogin => {
      const newInfo: UserLogin = { ...cur };
      newInfo[e.target.name as keyof UserLogin] = e.target.value; // 정석
      return newInfo;
    });
  };

  useEffect((): void => {
    if (loginInfo.email !== "") {
      setValid({
        ...valid,
        idValid:
          loginInfo.email.toLowerCase().match(reg) !== null ? true : false,
      });
    } else {
      setValid({
        ...valid,
        idValid: false,
      });
    }
  }, [loginInfo.email]);

  useEffect((): void => {
    if (loginInfo.password !== "") {
      setValid({
        ...valid,
        pwValid: loginInfo.password.length >= 8 ? true : false,
      });
    } else {
      setValid({
        ...valid,
        pwValid: false,
      });
    }
  }, [loginInfo.password]);

  return (
    <LoginBox>
      <LoginForm>
        <InputBox>
          <LoginText>아이디</LoginText>
          <LoginInput
            type="email"
            placeholder="이메일"
            name="email"
            value={loginInfo.email}
            onChange={handleOnChange}
          ></LoginInput>
        </InputBox>
        {!valid.idValid && (
          <ValidWord>이메일 형식의 아이디가 아닙니다.</ValidWord>
        )}
        <InputBox>
          <LoginText>비밀번호</LoginText>
          <LoginInput
            type="password"
            placeholder="비밀번호"
            name="password"
            value={loginInfo.password}
            onChange={handleOnChange}
          ></LoginInput>
        </InputBox>
        {!valid.pwValid && (
          <ValidWord>비밀번호 8글자 이상 필요합니다.</ValidWord>
        )}
        <LoginButton
          type="submit"
          value="로그인"
          disabled={!(valid.idValid && valid.pwValid)}
        ></LoginButton>
      </LoginForm>
    </LoginBox>
  );
}

export default Login;
