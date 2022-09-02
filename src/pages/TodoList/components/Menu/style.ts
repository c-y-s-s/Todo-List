import styled from "styled-components";

interface TodoButtonStyleProps {
  isCheck?: string;
  categoryToggle?: string;
}

export const TodoToggleButton = styled.div`
  margin-top: 70px;
`;
export const TodoButton = styled.div<TodoButtonStyleProps>`
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
