import React, { FC } from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import * as Styles from "./style";

interface Props {
  setToggleSwitch: React.Dispatch<React.SetStateAction<boolean>>;
  pageToggleSwitch: boolean;
}
const Footer: FC<Props> = ({ setToggleSwitch, pageToggleSwitch }) => {
  return (
    <>
      <Styles.FooterContainer>
        <Styles.FooterBlock>
          <Styles.AllTodoListButton
            onClick={() => {
              setToggleSwitch(false);
            }}
            isToggle={false}
            pageToggleSwitch={pageToggleSwitch}
          >
            <ListAltIcon sx={{ color: "#fff" }} />
          </Styles.AllTodoListButton>
          <Styles.AllTodoListButton
            onClick={() => {
              setToggleSwitch(true);
            }}
            isToggle={true}
            pageToggleSwitch={pageToggleSwitch}
          >
            <CalendarMonthIcon sx={{ color: "#fff" }} />
          </Styles.AllTodoListButton>
        </Styles.FooterBlock>
      </Styles.FooterContainer>
    </>
  );
};

export default Footer;
