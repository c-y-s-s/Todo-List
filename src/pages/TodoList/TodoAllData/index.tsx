import React, { FC } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
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
  min-height: 84vh;
`;
const TodoAllTextItem = styled.div`
  width: 320px;

  display: flex;
  align-items: center;
  color: #515070;
  padding: 0.65rem 0.85rem;
  background: #ffbb91;
  border-radius: 5px;
  margin: 1rem 0rem;
`;

const TodoAllCheckInput = styled.input`
  width: 23px;
  height: 23px;
  border: none;
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

export interface ITask {
  text: string;
  isDone: Boolean;
  isDate: string;
}
interface Props {
  pageToggleSwitch: boolean;
  data: ITask[];
}
const TodoAllData: FC<Props> = ({ pageToggleSwitch, data }) => {
  const transitions = useTransition(pageToggleSwitch, {
    from: { opacity: 0, transform: "translate(50px,0px)" },
    enter: { opacity: 1, transform: "translate(0px, 0px)" },
    delay: 50,
  });

  return (
    <>
      <TodoAll>
        <TodoAllContainer>
          {transitions((props, item) => (
            <animated.div
              style={{
                ...props,
              }}
            >
              <TodoAllBlock>
                {data.map((item) => {
                  return (
                    <TodoAllTextItem>
                      <TodoAllCheckInput type="checkbox" />
                      <TodoAllTextBlock>
                        <TodoAllText>{item.text}</TodoAllText>
                        <TodoAllTextTime>at 12:00pm</TodoAllTextTime>
                      </TodoAllTextBlock>
                    </TodoAllTextItem>
                  );
                })}
              </TodoAllBlock>
            </animated.div>
          ))}
        </TodoAllContainer>
      </TodoAll>
    </>
  );
};

export default TodoAllData;
