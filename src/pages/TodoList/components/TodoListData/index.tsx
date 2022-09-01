import React from "react";
import styled from "styled-components";
import { ITask } from "../../interface";

const TodoDataItem = styled.div`
  margin-top: 10px;
  height: 25px;
  background: #060e5f;
  color: #fff;
  padding: 15px 0px 15px 15px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover div {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
const TodoDataItemCheck = styled.div``;
const TodoDataItemText = styled.div`
  margin-left: 10px;
`;

const TodoDataContentBlock = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input``;

const TodoDataDelete = styled.div`
  color: #fff;
  font-family: "Verdana", "sans-serif";
  background: red;
  padding: 18px 5px 17.5px 7px;
  border-radius: 0px 18px 18px 0px;
  cursor: pointer;
  opacity: 0;
  transition: 0.75s;
  transform: translate(15px, 0);
`;
interface TodoListDataProps {
  todoData: ITask[];
  categoryToggle: string;
  setTodoData: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TodoListData: React.FC<TodoListDataProps> = ({
  todoData,
  categoryToggle,
  setTodoData,
}) => {
  function handleDelete(id: number): void {
    setTodoData(
      todoData.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function handleCategoryChange(id: number): void {
    setTodoData(
      todoData.map((item) => {
        let categoryToggle = item.category === "SOLVED" ? true : false;

        return item.id === id
          ? { ...item, category: categoryToggle ? "PENDING" : "SOLVED" }
          : item;
      })
    );
  }

  return (
    <>
      {categoryToggle === "ALL"
        ? todoData.map((item) => {
            return (
              <TodoDataItem>
                <TodoDataContentBlock>
                  <TodoDataItemCheck>
                    <Input
                      type="checkbox"
                      checked={item.category === "SOLVED"}
                      onChange={() => {
                        handleCategoryChange(item.id);
                      }}
                    />
                  </TodoDataItemCheck>
                  <TodoDataItemText>{item.text}</TodoDataItemText>
                </TodoDataContentBlock>
                <TodoDataDelete
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  X
                </TodoDataDelete>
              </TodoDataItem>
            );
          })
        : todoData
            .filter((item) => {
              return item.category === categoryToggle;
            })
            .map((item) => {
              return (
                <TodoDataItem>
                  <TodoDataContentBlock>
                    <TodoDataItemCheck>
                      <Input
                        type="checkbox"
                        checked={item.category === "SOLVED"}
                        onChange={() => {
                          handleCategoryChange(item.id);
                        }}
                      />
                    </TodoDataItemCheck>
                    <TodoDataItemText>{item.text}</TodoDataItemText>
                  </TodoDataContentBlock>
                  <TodoDataDelete
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    X
                  </TodoDataDelete>
                </TodoDataItem>
              );
            })}
    </>
  );
};

export default TodoListData;
