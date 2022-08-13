import styled from "styled-components";

export const TodoCardBox = styled.div`
  width: 800px;
  height: 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid green; */
  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const TextBox = styled.div`
  width: 600px;
  height: 100px;
  border: 1px solid blue;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid orange;
`;
export const TodoCardText = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const UpdateButton = styled.button`
  width: 80px;
  height: 50px;
  background-color: limegreen;
  border: none;
`;
export const DeleteButton = styled.button`
  width: 80px;
  height: 50px;
  background-color: firebrick;
  border: none;
`;
