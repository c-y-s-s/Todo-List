import styled from "styled-components";

interface TodoDatacategoriesButtonProps {
  categoryToggle?: string;
  isCheck?: string;
}


export const TodoDatacategories = styled.div``;
export const TodoDatacategoriesTitle = styled.div`
  font-family: "Verdana", "sans-serif";
  color: #e6d9d9;
  font-size: 8px;
  padding-top: 12px;
`;
export const TodoDatacategoriesBlock = styled.div`
  color: #fff;
  font-size: 12px;
  font-family: "Verdana", "sans-serif";
  display: flex;
  padding-top: 12px;
  justify-content: space-around;
`;
export const TodoDatacategoriesButton = styled.div<TodoDatacategoriesButtonProps>`
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
export const TodoDatacategoriesTaskNum = styled.div`
  z-index: 0;
`;
export const TodoDatacategoriesName = styled.div<TodoDatacategoriesButtonProps>`
  font-weight: 400;
  font-size: 18px;
  margin-top: 12px;
  color: ${(props) =>
    props.categoryToggle === props.isCheck ? `black` : `#fff`};
  letter-spacing: 1.5px;
  z-index: -99999;
`;

export const TodoDatacategoriesNameLine = styled.div<TodoDatacategoriesButtonProps>`
  margin-top: 7px;
  width: 100%;
  height: 3px;
  background: ${(props) =>
    props.categoryToggle === props.isCheck ? `#4a5ea5` : `#d80cfa`};
`;
