import React, { MouseEvent, useState } from "react";
import styled from "styled-components";
import { ITask } from "../../interface";
import * as Styles from "./style";

interface categoryProps {
  setCategoryToggle: React.Dispatch<React.SetStateAction<string>>;
  categoryToggle: string;
  todoData: ITask[];
}

const Categories: React.FC<categoryProps> = ({
  setCategoryToggle,
  categoryToggle,
  todoData,
}) => {
  // 分類各別筆數
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
      <Styles.TodoDatacategories>
        <Styles.TodoDatacategoriesTitle>
          CATEGORIES
        </Styles.TodoDatacategoriesTitle>
        <Styles.TodoDatacategoriesBlock>
          <Styles.TodoDatacategoriesButton
            onClick={handleCategoryClick}
            data-category="ALL"
            categoryToggle={categoryToggle}
            isCheck={"ALL"}
          >
            <Styles.TodoDatacategoriesTaskNum data-category="ALL">
              {todoData.length > 0 ? todoData.length : 0} tasks
            </Styles.TodoDatacategoriesTaskNum>
            <Styles.TodoDatacategoriesName
              data-category="ALL"
              categoryToggle={categoryToggle}
              isCheck={"ALL"}
            >
              ALL
            </Styles.TodoDatacategoriesName>
            <Styles.TodoDatacategoriesNameLine
              categoryToggle={categoryToggle}
              isCheck={"ALL"}
            ></Styles.TodoDatacategoriesNameLine>
          </Styles.TodoDatacategoriesButton>

          <Styles.TodoDatacategoriesButton
            onClick={handleCategoryClick}
            data-category="PENDING"
            categoryToggle={categoryToggle}
            isCheck={"PENDING"}
          >
            <Styles.TodoDatacategoriesTaskNum data-category="PENDING">
              {taskPenCount.PENDING > 0 ? taskPenCount.PENDING : 0} tasks
            </Styles.TodoDatacategoriesTaskNum>
            <Styles.TodoDatacategoriesName
              data-category="PENDING"
              categoryToggle={categoryToggle}
              isCheck={"PENDING"}
            >
              PENDING
            </Styles.TodoDatacategoriesName>
            <Styles.TodoDatacategoriesNameLine
              categoryToggle={categoryToggle}
              isCheck={"PENDING"}
            ></Styles.TodoDatacategoriesNameLine>
          </Styles.TodoDatacategoriesButton>

          <Styles.TodoDatacategoriesButton
            onClick={handleCategoryClick}
            data-category="SOLVED"
            categoryToggle={categoryToggle}
            isCheck={"SOLVED"}
          >
            <Styles.TodoDatacategoriesTaskNum data-category="SOLVED">
              {taskPenCount.SOLVED > 0 ? taskPenCount.SOLVED : 0} tasks
            </Styles.TodoDatacategoriesTaskNum>
            <Styles.TodoDatacategoriesName
              data-category="SOLVED"
              categoryToggle={categoryToggle}
              isCheck={"SOLVED"}
            >
              SOLVED
            </Styles.TodoDatacategoriesName>
            <Styles.TodoDatacategoriesNameLine
              categoryToggle={categoryToggle}
              isCheck={"SOLVED"}
            ></Styles.TodoDatacategoriesNameLine>
          </Styles.TodoDatacategoriesButton>
        </Styles.TodoDatacategoriesBlock>
      </Styles.TodoDatacategories>
    </>
  );
};

export default Categories;
