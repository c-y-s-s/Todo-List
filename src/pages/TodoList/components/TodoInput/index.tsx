import React, { useState, ChangeEvent, useEffect } from "react";
import { FC } from "react";
import styled from "styled-components";
import { ITask } from "../../interface";
const TodoInputBlock = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 80%;
  font-size: 18px;
  border: none;
  background: #fff;
  border-radius: 3px 0px 0px 3px;
  padding: 5px;
  ::placeholder {
    color: #e5d9d9;
  }
`;
const TodoTextButton = styled.button`
  border: none;
  font-size: 18px;
  padding: 5px;
  border-radius: 0px 3px 3px 0px;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background: #060e5f;
    color: #fff;
  }
`;

interface TodoInputProps {
  setTodoData: React.Dispatch<React.SetStateAction<ITask[]>>;
  todoData: ITask[];
}

const TodoInput: React.FC<TodoInputProps> = ({ setTodoData, todoData }) => {
  const [inputValue, setValue] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleClick(): void {
    setTodoData([
      ...todoData,
      {
        id: (todoData.length += 1),
        text: inputValue,
        category: "PENDING",
        date: "2022",
      },
    ]);

    setValue("");
  }

  return (
    <>
      <TodoInputBlock>
        <Input
          type="text"
          placeholder="Task"
          onChange={handleChange}
          value={inputValue}
        />
        <TodoTextButton onClick={handleClick}>Send</TodoTextButton>
      </TodoInputBlock>
    </>
  );
};

export default TodoInput;
