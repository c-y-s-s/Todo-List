import styled from "styled-components";

interface TodoDataCategoriesButtonProps {
  categoriesText?: string;
  categoryToggle?: string;
  isCheck?: string;
}

export const TodoDataCategories = styled.div``;
export const TodoDataCategoriesTitle = styled.div`
  font-family: "Verdana", "sans-serif";
  color: #e6d9d9;
  font-size: 8px;
  padding-top: 12px;
`;
export const TodoDataCategoriesBlock = styled.div`
  color: #fff;
  font-size: 12px;
  font-family: "Verdana", "sans-serif";
  display: flex;
  padding-top: 12px;
  justify-content: space-around;
`;
export const TodoDataCategoriesButton = styled.div<TodoDataCategoriesButtonProps>`
  width: 90px;
  height: 50px;
  padding: 25px 15px 35px 15px;
  background: ${(props) =>
    props.categoryToggle === props.categoriesText ? `#ccc` : `#060e5f`};
  border-radius: 20px;
  color: ${(props) =>
    props.categoryToggle === props.categoriesText ? `black` : `#e6d9d9`};
  cursor: pointer;
  transition: 0.3s;
  z-index: 99;
  :hover {
    transform: translate(0, -10px);
  }
`;
export const TodoDataCategoriesTaskNum = styled.div`
  z-index: 0;
`;
export const TodoDataCategoriesName = styled.div<TodoDataCategoriesButtonProps>`
  font-weight: 400;
  font-size: 18px;
  margin-top: 12px;
  color: ${(props) =>
    props.categoryToggle === props.categoriesText ? `black` : `#fff`};
  letter-spacing: 1.5px;
  z-index: -99999;
`;

export const TodoDataCategoriesNameLine = styled.div<TodoDataCategoriesButtonProps>`
  margin-top: 7px;
  width: 100%;
  height: 3px;
  background: ${(props) =>
    props.categoryToggle === props.categoriesText ? `#4a5ea5` : `#d80cfa`};
`;
