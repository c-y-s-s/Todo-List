import React from "react";
import { FC } from "react";
import styled from "styled-components";
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
const TodoInput = () => {
  return (
    <>
      <TodoInputBlock>
        <Input type="text" placeholder="Task" />
        <TodoTextButton>Send</TodoTextButton>
      </TodoInputBlock>
    </>
  );
};

export default TodoInput;
