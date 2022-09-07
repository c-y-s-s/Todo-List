import React, { FC } from "react";
import styled from "styled-components";
import { ITask } from "../../interface";
const TodoAll = styled.div``;
const TodoAllContainer = styled.div`
  background: #f6f6f6;
  display: flex;
  width: 390px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 2rem;
`;

const TodoAllBlock = styled.div`
  width: 390px;
`;
const TodoAllTextItem = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  color: #515070;
  padding: 0.75rem 0.85rem;
  background: #ffbb91;
  border-radius: 8px;
  margin: 0.8rem 0rem;
`;

const TodoAllCheckInput = styled.input`
  width: 23px;
  height: 23px;
`;

const TodoAllTextBlock = styled.div`
  margin: 0px 0px 0px 0.75rem;
`;
const TodoAllTextTime = styled.div`
  padding-top: 0.25rem;
  font-size: 12px;
`;
const TodoAllText = styled.div`
  font-weight: 900;
`;

interface Props {
  pageToggleSwitch: boolean;
  data: ITask[];
}
const TodoAllData: FC<Props> = ({ pageToggleSwitch, data }) => {
  return (
    <>
      <TodoAll>
        <TodoAllContainer>
          <TodoAllBlock>
            {data.map((item) => {
              return (
                <TodoAllTextItem>
                  <TodoAllCheckInput type="checkbox" />
                  <TodoAllTextBlock>
                    <TodoAllText>{item.textValue}</TodoAllText>
                    <TodoAllTextTime>at 12:00pm</TodoAllTextTime>
                  </TodoAllTextBlock>
                </TodoAllTextItem>
              );
            })}
          </TodoAllBlock>
        </TodoAllContainer>
      </TodoAll>
    </>
  );
};

export default TodoAllData;
