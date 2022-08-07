import styled from "styled-components";

export const LoginBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginForm = styled.form`
  width: 500px;
  height: 300px;
  margin-bottom: 140px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`;

export const InputBox = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

export const LoginInput = styled.input`
  width: 200px;
  height: 40px;
  font-size: 15px;
  margin-bottom: 15px;
`;

export const LoginText = styled.h3`
  font-weight: bold;
`;

export const LoginButton = styled.input`
  margin-top: 10px;
  width: 120px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #1e90ff;
  background-color: #1e90ff;
  cursor: pointer;
  font-weight: bold;
`;

export const ValidWord = styled.p`
  color: red;
  font-weight: bold;
`;
