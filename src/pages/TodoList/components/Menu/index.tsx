import React from "react";
import { FC } from "react";
import styled from "styled-components";

const TodoToggleButton = styled.div`
  margin-top: 70px;
`;
const TodoButton = styled.div`
  color: #fff;
  font-family: "Arial";
  font-weight: 500;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;

  :hover {
    border-left: 10px solid #fff;
  }
`;

const Menu: FC = () => {
  return (
    <>
      <TodoToggleButton>
        <TodoButton>ALL</TodoButton>
        <TodoButton>PENDING</TodoButton>
        <TodoButton>SOLVED</TodoButton>
      </TodoToggleButton>
    </>
  );
};

export default Menu;
