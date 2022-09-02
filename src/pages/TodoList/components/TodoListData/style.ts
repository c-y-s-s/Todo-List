import styled from "styled-components";
export const TodoDataItem = styled.div`
  margin-top: 3px;
  height: 25px;
  background: #060e5f;
  color: #fff;
  padding: 15px 0px 15px 15px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover div {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
export const TodoDataItemCheck = styled.div``;
export const TodoDataItemText = styled.div`
  margin-left: 10px;
  font-family: "Verdana", "sans-serif";
`;

export const TodoDataContentBlock = styled.div`
  display: flex;
  align-items: center;
`;
export const Input = styled.input``;

export const TodoDataDelete = styled.div`
  color: #fff;
  font-family: "Verdana", "sans-serif";
  background: #bd000f;
  padding: 15px 5.8px 15px 7px;
  border-radius: 0px 18px 18px 0px;
  cursor: pointer;
  opacity: 0;
  transition: 0.75s;
  transform: translate(15px, 0);
  height: 100%;
`;

export const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const TodoLastingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 7px;
`;

export const TodoDate = styled.div`
  margin-top: 5px;
  color: #fff;
  font-family: "Verdana", "sans-serif";
  font-size: 12px;
`;

export const TodoTime = styled.div``;
