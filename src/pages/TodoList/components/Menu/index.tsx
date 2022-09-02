import React, { MouseEvent } from "react";
import * as Styles from "./style";

interface menuProps {
  setCategoryToggle: React.Dispatch<React.SetStateAction<string>>;
  categoryToggle: string;
}

const Menu: React.FC<menuProps> = ({ setCategoryToggle, categoryToggle }) => {
  function handleCategoryClick(event: MouseEvent<HTMLElement>): void {
    const input = event.target as HTMLElement;
    switch (input.innerText) {
      case "ALL": {
        setCategoryToggle(input.innerText);
        break;
      }
      case "PENDING": {
        setCategoryToggle(input.innerText);
        break;
      }
      case "SOLVED": {
        setCategoryToggle(input.innerText);
        break;
      }
      default:
        console.log("error");
    }
  }
  return (
    <>
      <Styles.TodoToggleButton>
        <Styles.TodoButton
          isCheck={"ALL"}
          categoryToggle={categoryToggle}
          onClick={handleCategoryClick}
        >
          ALL
        </Styles.TodoButton>
        <Styles.TodoButton
          isCheck={"PENDING"}
          categoryToggle={categoryToggle}
          onClick={handleCategoryClick}
        >
          PENDING
        </Styles.TodoButton>
        <Styles.TodoButton
          isCheck={"SOLVED"}
          categoryToggle={categoryToggle}
          onClick={handleCategoryClick}
        >
          SOLVED
        </Styles.TodoButton>
      </Styles.TodoToggleButton>
    </>
  );
};

export default Menu;
