import React, { useState, useEffect } from "react";
import { TodoPage, AddButton } from "./index.style";
import TodoEdit from "../TodoEdit";
import TodoCard from "../TodoCard";
import axios from "axios";

interface Todos {
  title: string;
  content: string;
  id: string;
}

function Todo() {
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todos[]>([]);
  const handleEdit = () => {
    setEditOpen((cur): boolean => {
      return !cur;
    });
  };

  const getTodos = async () => {
    const res = await axios.get("http://localhost:8080/todos", {
      headers: {
        Authorization: `${sessionStorage.getItem("userToken")}`,
      },
    });
    setTodos(res.data.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoPage>
      {todos.length !== 0 &&
        todos.map((todo, i) => (
          <TodoCard
            key={i}
            title={todo.title}
            content={todo.content}
          ></TodoCard>
        ))}
      {editOpen && (
        <TodoEdit handleEdit={handleEdit} getTodos={getTodos}></TodoEdit>
      )}
      {!editOpen && <AddButton onClick={handleEdit}>+</AddButton>}
    </TodoPage>
  );
}

export default Todo;
