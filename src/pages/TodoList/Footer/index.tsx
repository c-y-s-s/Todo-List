import React, { FC } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: sticky;
  top: 0;
  bottom: 0;
`;
const FooterBlock = styled.div`
  width: 390px;
  background: #ff8e6e;
  margin: auto;
  display: flex;
  justify-content: space-around;
  padding: 0.35rem;
`;
const AllTodoListButton = styled.div`
  border: none;
  background: #ff8e6e;

  padding: 0.5rem;
`;
const DateButton = styled.div`
  border: none;
  background: #ff8e6e;
  padding: 0.5rem;
`;

interface Props {
  setToggleSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}
const Footer: FC<Props> = ({ setToggleSwitch }) => {
  return (
    <>
      <FooterContainer>
        <FooterBlock>
          <AllTodoListButton
            onClick={() => {
              setToggleSwitch(false);
            }}
          >
            ALL
          </AllTodoListButton>
          <DateButton
            onClick={() => {
              setToggleSwitch(true);
            }}
          >
            Date
          </DateButton>
        </FooterBlock>
      </FooterContainer>
    </>
  );
};

export default Footer;
