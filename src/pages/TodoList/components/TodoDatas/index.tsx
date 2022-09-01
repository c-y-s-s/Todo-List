import React from "react";
import { FC } from "react";
import styled from "styled-components";

const TodoData = styled.div`
  margin-top: 30px;
`;
const TodoDataTitle = styled.div`
  font-family: "Verdana", "sans-serif";
  color: #e6d9d9;
  font-size: 5px;
`;
const TodoDataItem = styled.div`
  height: 25px;
  background: #060e5f;
  color: #fff;
  padding: 15px 15px;
  border-radius: 18px;
  display: flex;
  margin-top: 15px;
  align-items: center;
`;
const TodoDataItemCheck = styled.div``;
const TodoDataItemText = styled.div`
  margin-left: 10px;
`;

const TodoDatas: FC = () => {
  return (
    <>
      <TodoData>
        <TodoDataTitle>DAILY TASK MENU</TodoDataTitle>
        <TodoDataItem>
          <TodoDataItemCheck>O</TodoDataItemCheck>
          <TodoDataItemText>Daily meeting with team</TodoDataItemText>
        </TodoDataItem>
      </TodoData>
    </>
  );
};

export default TodoDatas;
