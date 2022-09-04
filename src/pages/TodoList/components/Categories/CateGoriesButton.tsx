import React, { MouseEvent, useState } from "react";
import * as Styles from "./style";
import { ITask } from "../../interface";
interface Props {
  categoriesText: string;
  setCategoryToggle: React.Dispatch<React.SetStateAction<string>>;
  categoryToggle: string;
  todoData: ITask[];
}

const CateGoriesButton: React.FC<Props> = ({
  categoriesText,
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

  let resultPenCount = 0;
  if (categoriesText === "ALL") {
    resultPenCount = todoData.length;
  } else if (categoriesText === "PENDING") {
    resultPenCount = taskPenCount.PENDING;
  } else {
    resultPenCount = taskPenCount.SOLVED;
  }

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
    }
  }
  return (
    <div>
      <Styles.TodoDataCategoriesButton
        onClick={handleCategoryClick}
        data-category={categoriesText}
        categoryToggle={categoryToggle}
        categoriesText={categoriesText}
      >
        <Styles.TodoDataCategoriesTaskNum data-category={categoriesText}>
          {resultPenCount} tasks
        </Styles.TodoDataCategoriesTaskNum>
        <Styles.TodoDataCategoriesName
          data-category={categoriesText}
          categoryToggle={categoryToggle}
        >
          {categoriesText}
        </Styles.TodoDataCategoriesName>
        <Styles.TodoDataCategoriesNameLine
          categoryToggle={categoryToggle}
          categoriesText={categoriesText}
        ></Styles.TodoDataCategoriesNameLine>
      </Styles.TodoDataCategoriesButton>
    </div>
  );
};

export default CateGoriesButton;
