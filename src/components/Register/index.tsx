import React, { useState, useEffect } from "react";
import {
  RegisterBox,
  RegisterForm,
  InputBox,
  RegisterInput,
  RegisterText,
  RegisterButton,
  ValidWord,
} from "./index.style";

interface UserRegister {
  email: string;
  password: string;
}

interface LoginValid {
  idValid: boolean;
  pwValid: boolean;
}

function Register() {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [valid, setValid] = useState<LoginValid>({
    idValid: false,
    pwValid: false,
  });
  const [registerInfo, setRegisterInfo] = useState<UserRegister>({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInfo((cur): UserRegister => {
      const newInfo: UserRegister = { ...cur };
      newInfo[e.target.name as keyof UserRegister] = e.target.value; // 정석
      return newInfo;
    });
  };

  useEffect((): void => {
    if (registerInfo.email !== "") {
      setValid({
        ...valid,
        idValid:
          registerInfo.email.toLowerCase().match(reg) !== null ? true : false,
      });
    } else {
      setValid({
        ...valid,
        idValid: false,
      });
    }
  }, [registerInfo.email]);

  useEffect((): void => {
    if (registerInfo.password !== "") {
      setValid({
        ...valid,
        pwValid: registerInfo.password.length >= 8 ? true : false,
      });
    } else {
      setValid({
        ...valid,
        pwValid: false,
      });
    }
  }, [registerInfo.password]);
  return (
    <RegisterBox>
      <RegisterForm>
        <InputBox>
          <RegisterText>아이디</RegisterText>
          <RegisterInput
            type="email"
            placeholder="이메일"
            name="email"
            value={registerInfo.email}
            onChange={handleOnChange}
          ></RegisterInput>
        </InputBox>
        {!valid.idValid && (
          <ValidWord>이메일 형식의 아이디가 아닙니다.</ValidWord>
        )}
        <InputBox>
          <RegisterText>비밀번호</RegisterText>
          <RegisterInput
            type="password"
            placeholder="비밀번호"
            name="password"
            value={registerInfo.password}
            onChange={handleOnChange}
          ></RegisterInput>
        </InputBox>
        {!valid.pwValid && (
          <ValidWord>비밀번호 8글자 이상 필요합니다.</ValidWord>
        )}
        <RegisterButton
          type="submit"
          value="회원가입"
          disabled={!(valid.idValid && valid.pwValid)}
        ></RegisterButton>
      </RegisterForm>
    </RegisterBox>
  );
}

export default Register;
