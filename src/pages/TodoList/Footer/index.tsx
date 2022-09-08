import React, { FC } from "react";
import styled from "styled-components";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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

const AddTodoButtonBlock = styled.div`
  // position: fixed;
  // right: 5%;
  // top: 90%;
  // width: 3rem;
  // height: 3rem;
  // border: 2px solid black;
  // display: flex;
  // align-items: center;
  // justify-content: center;
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
            <ListAltIcon sx={{ color: "#fff" }} />
          </AllTodoListButton>
          <DateButton
            onClick={() => {
              setToggleSwitch(true);
            }}
          >
            <CalendarMonthIcon sx={{ color: "#fff" }} />
          </DateButton>
        </FooterBlock>
      </FooterContainer>
    </>
  );
};

export default Footer;
