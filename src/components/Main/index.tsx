import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBox, LoginButton, RegisterButton } from "./index.style";

function Main() {
  const navigate = useNavigate();
  const loginButton = () => {
    navigate("/login");
  };
  const registerButton = () => {
    navigate("/register");
  };
  return (
    <>
      <ButtonBox>
        <LoginButton onClick={loginButton}>로그인 하러가기</LoginButton>
        <RegisterButton onClick={registerButton}>
          회원가입 하러가기
        </RegisterButton>
      </ButtonBox>
    </>
  );
}

export default Main;
