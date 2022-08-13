import styled from "styled-components";

export const TodoEditForm = styled.form`
  border: 1px solid black;
  border-radius: 10px;
  width: 500px;
  margin-bottom: 10px;
`;

export const EditInput = styled.input`
  width: 400px;
  height: 50px;
  font-size: 20px;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const EditText = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const ConfirmButton = styled.button`
  background-color: dodgerblue;
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const CancelButton = styled.button`
  background-color: red;
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
