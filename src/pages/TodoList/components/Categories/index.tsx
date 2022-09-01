import React from "react";
import { FC } from "react";
import styled from "styled-components";

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
const TodoDatacategoriesALL = styled.div`
  width: 90px;
  height: 50px;
  padding: 25px 15px 35px 15px;
  background: #060e5f;
  border-radius: 20px;
  color: #e6d9d9;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: translate(0, -10px);
  }
`;
const TodoDatacategoriesALLTaskNum = styled.div``;
const TodoDatacategoriesName = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-top: 12px;
  color: #ffffff;
  letter-spacing: 1.5px;
`;

const TodoDatacategoriesNameLine = styled.div`
  margin-top: 7px;
  width: 100%;
  height: 3px;
  background: #d80cfa;
`;
const TodoDatacategoriesPending = styled.div``;
const TodoDatacategoriesSolved = styled.div``;

const Categories: FC = () => {
  return (
    <>
      <TodoDatacategories>
        <TodoDatacategoriesTitle>CATEGORIES</TodoDatacategoriesTitle>
        <TodoDatacategoriesBlock>
          <TodoDatacategoriesALL>
            <TodoDatacategoriesALLTaskNum>
              40 tasks
            </TodoDatacategoriesALLTaskNum>
            <TodoDatacategoriesName>ALL</TodoDatacategoriesName>
            <TodoDatacategoriesNameLine></TodoDatacategoriesNameLine>
          </TodoDatacategoriesALL>

          <TodoDatacategoriesALL>
            <TodoDatacategoriesALLTaskNum>
              40 tasks
            </TodoDatacategoriesALLTaskNum>
            <TodoDatacategoriesName>PENDING</TodoDatacategoriesName>
            <TodoDatacategoriesNameLine></TodoDatacategoriesNameLine>
          </TodoDatacategoriesALL>

          <TodoDatacategoriesALL>
            <TodoDatacategoriesALLTaskNum>
              40 tasks
            </TodoDatacategoriesALLTaskNum>
            <TodoDatacategoriesName>SOLVED</TodoDatacategoriesName>
            <TodoDatacategoriesNameLine></TodoDatacategoriesNameLine>
          </TodoDatacategoriesALL>
          {/* <TodoDatacategoriesPending>PENDING</TodoDatacategoriesPending>
                <TodoDatacategoriesSolved>SOLVED</TodoDatacategoriesSolved> */}
        </TodoDatacategoriesBlock>
      </TodoDatacategories>
    </>
  );
};

export default Categories;
