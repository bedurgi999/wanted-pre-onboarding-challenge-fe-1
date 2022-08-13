import React, { useState } from "react";
import {
  TodoEditForm,
  EditInput,
  InputBox,
  EditText,
  ConfirmButton,
  CancelButton,
} from "./index.style";
import axios from "axios";

interface TodoEditProps {
  handleEdit(): void;
  getTodos: () => void;
}

interface EditData {
  title: string;
  content: string;
}

function TodoEdit({ handleEdit, getTodos }: TodoEditProps) {
  const [todoData, setTodoData] = useState<EditData>({
    title: "",
    content: "",
  });
  const editDataOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoData((cur): EditData => {
      const newData = { ...cur };
      newData[e.target.name as keyof EditData] = e.target.value;
      return newData;
    });
  };

  const createTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/todos", todoData, {
      headers: {
        Authorization: `${sessionStorage.getItem("userToken")}`,
      },
    });
    getTodos();
    setTodoData({
      title: "",
      content: "",
    });
    handleEdit();
  };

  return (
    <>
      <TodoEditForm onSubmit={createTodo}>
        <InputBox>
          <EditText>제목</EditText>
          <EditInput
            type="text"
            name="title"
            value={todoData.title}
            onChange={editDataOnChange}
          ></EditInput>
        </InputBox>
        <InputBox>
          <EditText>내용</EditText>
          <EditInput
            type="text"
            name="content"
            value={todoData.content}
            onChange={editDataOnChange}
          ></EditInput>
        </InputBox>
        <InputBox>
          <ConfirmButton>확인</ConfirmButton>
          <CancelButton onClick={handleEdit}>취소</CancelButton>
        </InputBox>
      </TodoEditForm>
    </>
  );
}

export default TodoEdit;
