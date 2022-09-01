import React, { MouseEvent, useState } from "react";
import { FC } from "react";
import styled from "styled-components";
import { ITask } from "../../interface";
interface TodoDatacategoriesButtonProps {
  categoryToggle?: string;
  isCheck?: string;
}
const TodoDatacategories = styled.div``;
const TodoDatacategoriesTitle = styled.div`
  font-family: "Verdana", "sans-serif";
  color: #e6d9d9;
  font-size: 8px;
  padding-top: 12px;
`;
const TodoDatacategoriesBlock = styled.div`
  color: #fff;
  font-size: 12px;
  font-family: "Verdana", "sans-serif";
  display: flex;
  padding-top: 12px;
  justify-content: space-around;
`;
const TodoDatacategoriesButton = styled.div<TodoDatacategoriesButtonProps>`
  width: 90px;
  height: 50px;
  padding: 25px 15px 35px 15px;
  background: ${(props) =>
    props.categoryToggle === props.isCheck ? `#ccc` : `#060e5f`};
  border-radius: 20px;
  color: ${(props) =>
    props.categoryToggle === props.isCheck ? `black` : `#e6d9d9`};
  cursor: pointer;
  transition: 0.3s;
  z-index: 99;
  :hover {
    transform: translate(0, -10px);
  }
`;
const TodoDatacategoriesTaskNum = styled.div`
  z-index: 0;
`;
const TodoDatacategoriesName = styled.div<TodoDatacategoriesButtonProps>`
  font-weight: 400;
  font-size: 18px;
  margin-top: 12px;
  color: ${(props) =>
    props.categoryToggle === props.isCheck ? `black` : `#fff`};
  letter-spacing: 1.5px;
  z-index: -99999;
`;

const TodoDatacategoriesNameLine = styled.div<TodoDatacategoriesButtonProps>`
  margin-top: 7px;
  width: 100%;
  height: 3px;
  background: ${(props) =>
    props.categoryToggle === props.isCheck ? `#4a5ea5` : `#d80cfa`};
`;
const TodoDatacategoriesPending = styled.div``;
const TodoDatacategoriesSolved = styled.div``;
interface categoryProps {
  setCategoryToggle: React.Dispatch<React.SetStateAction<string>>;
  categoryToggle: string;
  todoData: ITask[];
}

interface ReduceReturnType {
  ALL?: number;
  PENDING?: string;
  SOLVED?: number;
}
const Categories: React.FC<categoryProps> = ({
  setCategoryToggle,
  categoryToggle,
  todoData,
}) => {
  let taskPenCount = todoData.reduce<Record<string, number>>(
    (accumulator, current) => {
      if (accumulator[current.category]) {
        accumulator[current.category] += 1;
      } else {
        accumulator[current.category] = 1;
      }
      return accumulator;
    },
    {}
  );

  function handleCategoryClick(event: MouseEvent<HTMLElement>): void {
    const input = event.target as HTMLElement;

    switch (input.dataset.category) {
      case "ALL": {
        setCategoryToggle("ALL");
        break;
      }
      case "PENDING": {
        setCategoryToggle("PENDING");
        break;
      }
      case "SOLVED": {
        setCategoryToggle("SOLVED");
        break;
      }
      default:
        console.log("error");
    }
  }
  return (
    <>
      <TodoDatacategories>
        <TodoDatacategoriesTitle>CATEGORIES</TodoDatacategoriesTitle>
        <TodoDatacategoriesBlock>
          <TodoDatacategoriesButton
            onClick={handleCategoryClick}
            data-category="ALL"
            categoryToggle={categoryToggle}
            isCheck={"ALL"}
          >
            <TodoDatacategoriesTaskNum data-category="ALL">
              {todoData.length > 0 ? todoData.length : 0} tasks
            </TodoDatacategoriesTaskNum>
            <TodoDatacategoriesName
              data-category="ALL"
              categoryToggle={categoryToggle}
              isCheck={"ALL"}
            >
              ALL
            </TodoDatacategoriesName>
            <TodoDatacategoriesNameLine
              categoryToggle={categoryToggle}
              isCheck={"ALL"}
            ></TodoDatacategoriesNameLine>
          </TodoDatacategoriesButton>

          <TodoDatacategoriesButton
            onClick={handleCategoryClick}
            data-category="PENDING"
            categoryToggle={categoryToggle}
            isCheck={"PENDING"}
          >
            <TodoDatacategoriesTaskNum data-category="PENDING">
              {taskPenCount.PENDING > 0 ? taskPenCount.PENDING : 0} tasks
            </TodoDatacategoriesTaskNum>
            <TodoDatacategoriesName
              data-category="PENDING"
              categoryToggle={categoryToggle}
              isCheck={"PENDING"}
            >
              PENDING
            </TodoDatacategoriesName>
            <TodoDatacategoriesNameLine
              categoryToggle={categoryToggle}
              isCheck={"PENDING"}
            ></TodoDatacategoriesNameLine>
          </TodoDatacategoriesButton>

          <TodoDatacategoriesButton
            onClick={handleCategoryClick}
            data-category="SOLVED"
            categoryToggle={categoryToggle}
            isCheck={"SOLVED"}
          >
            <TodoDatacategoriesTaskNum data-category="SOLVED">
              {taskPenCount.SOLVED > 0 ? taskPenCount.SOLVED : 0} tasks
            </TodoDatacategoriesTaskNum>
            <TodoDatacategoriesName
              data-category="SOLVED"
              categoryToggle={categoryToggle}
              isCheck={"SOLVED"}
            >
              SOLVED
            </TodoDatacategoriesName>
            <TodoDatacategoriesNameLine
              categoryToggle={categoryToggle}
              isCheck={"SOLVED"}
            ></TodoDatacategoriesNameLine>
          </TodoDatacategoriesButton>
          {/* <TodoDatacategoriesPending>PENDING</TodoDatacategoriesPending>
                <TodoDatacategoriesSolved>SOLVED</TodoDatacategoriesSolved> */}
        </TodoDatacategoriesBlock>
      </TodoDatacategories>
    </>
  );
};

export default Categories;
