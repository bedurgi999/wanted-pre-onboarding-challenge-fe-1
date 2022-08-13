import React from "react";
import {
  TodoCardBox,
  TodoCardText,
  TextBox,
  ButtonBox,
  UpdateButton,
  DeleteButton,
} from "./index.style";

interface TodoCardData {
  title: string;
  content: string;
}

function TodoCard({ title, content }: TodoCardData) {
  return (
    <TodoCardBox>
      <TextBox>
        <TodoCardText>제목 : {title}</TodoCardText>
        <TodoCardText>내용 : {content}</TodoCardText>
      </TextBox>
      <ButtonBox>
        <UpdateButton>수정</UpdateButton>
        <DeleteButton>삭제</DeleteButton>
      </ButtonBox>
    </TodoCardBox>
  );
}

export default TodoCard;
