import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0px;
  z-index: 999;
`;
export const TitleBlock = styled.div`
  background: #ff8e6e;
  display: flex;
  width: 390px;
  justify-content: space-between;
  align-items: center;
  padding: 1.9rem 1rem;
`;
export const TitleName = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  color: #fff;
`;

export const IconBlock = styled.div`
  display: flex;
`;
export const AddTodo = styled.div`
  padding: 0rem 1rem;
`;
export const Setting = styled.div``;

export const AddTaskTitleName = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #515070;
`;

export const InputName = styled.div`
  padding: 0.55rem 0;
  font-size: 12px;
  color: #515070;
`;
export const Input = styled.input`
  width: 320px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  color: #515070;
  font-weight: 800;
  background: "#1A2027";
  border: none;
  box-shadow: 0px 2px 2px "#1A2027";
`;

export const AddTaskButtonBlock = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 1rem 0 0;
`;

interface TaskButtonProps {
  primary?: string;
}

export const TaskButton = styled.div<TaskButtonProps>`
  border: 1px solid #515070;
  font-size: 14px;
  border-radius: 5px;
  padding: 0.35rem 0.95rem;
  margin: 1.25rem 0.5rem 0.25rem 0.25rem;
  cursor: pointer;
  font-weight: 800;
  color: ${(props) => (props.primary ? "#fff" : "#515070")};
  background: ${(props) => props.primary && "#515070"};
`;
