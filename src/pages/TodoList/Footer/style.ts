import styled from "styled-components";

export const FooterContainer = styled.div`
  position: sticky;
  top: 0;
  bottom: 0;
`;
export const FooterBlock = styled.div`
  width: 390px;
  background: #ff8e6e;
  margin: auto;
  display: flex;
  justify-content: space-around;
  padding: 0.35rem;
`;

interface ButtonProps {
  isToggle: boolean;
  pageToggleSwitch: boolean;
}
export const AllTodoListButton = styled.div<ButtonProps>`
  border: none;
  padding: 0.65rem 0.75rem;
  background: ${(props) =>
    props.isToggle === props.pageToggleSwitch ? "#E85E37" : " #ff8e6e"};
  border-radius: 55%;
`;
export const DateButton = styled.div<ButtonProps>`
  border: none;
  padding: 0.5rem;
`;

export const AddTodoButtonBlock = styled.div`
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
