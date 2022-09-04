import React, { MouseEvent } from "react";
import { ITask } from "../../interface";
import * as Styles from "./style";
import CateGoriesButton from "./CateGoriesButton";

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
  return (
    <>
      <Styles.TodoDataCategories>
        <Styles.TodoDataCategoriesTitle>
          CATEGORIES
        </Styles.TodoDataCategoriesTitle>
        <Styles.TodoDataCategoriesBlock>
          <CateGoriesButton
            categoriesText={"ALL"}
            setCategoryToggle={setCategoryToggle}
            categoryToggle={categoryToggle}
            todoData={todoData}
          />
          <CateGoriesButton
            categoriesText={"PENDING"}
            setCategoryToggle={setCategoryToggle}
            categoryToggle={categoryToggle}
            todoData={todoData}
          />
          <CateGoriesButton
            categoriesText={"SOLVED"}
            setCategoryToggle={setCategoryToggle}
            categoryToggle={categoryToggle}
            todoData={todoData}
          />
        </Styles.TodoDataCategoriesBlock>
      </Styles.TodoDataCategories>
    </>
  );
};

export default Categories;
