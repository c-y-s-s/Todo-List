import React, { MouseEvent } from "react";

import styled from "styled-components";

interface TodoButtonStyleProps {
  isCheck?: string;
  categoryToggle?: string;
}
const TodoToggleButton = styled.div`
  margin-top: 70px;
`;
const TodoButton = styled.div<TodoButtonStyleProps>`
  color: #fff;
  font-family: "Arial";
  font-weight: 500;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  :hover {
    border-left: 10px solid #fff;
  }
  border-left: ${(props) =>
    props.categoryToggle === props.isCheck && `10px solid #fff`};
`;
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
      <TodoToggleButton>
        <TodoButton
          isCheck={"ALL"}
          categoryToggle={categoryToggle}
          onClick={handleCategoryClick}
        >
          ALL
        </TodoButton>
        <TodoButton
          isCheck={"PENDING"}
          categoryToggle={categoryToggle}
          onClick={handleCategoryClick}
        >
          PENDING
        </TodoButton>
        <TodoButton
          isCheck={"SOLVED"}
          categoryToggle={categoryToggle}
          onClick={handleCategoryClick}
        >
          SOLVED
        </TodoButton>
      </TodoToggleButton>
    </>
  );
};

export default Menu;
