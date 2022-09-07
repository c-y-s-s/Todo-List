import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TitleBlock = styled.div`
  background: #ff8e6e;
  display: flex;
  width: 390px;
  justify-content: space-between;
  align-items: center;
  padding: 1.9rem 1rem;
`;
const TitleName = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  color: #fff;
`;
const Setting = styled.div``;
const Title = () => {
  return (
    <>
      <TitleContainer>
        <TitleBlock>
          <TitleName>Check List</TitleName>
          <Setting>設定icon</Setting>
        </TitleBlock>
      </TitleContainer>
    </>
  );
};
export default Title;
