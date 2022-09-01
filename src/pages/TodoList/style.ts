import styled from "styled-components";

export const GlobalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: #bcceef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoListBlock = styled.div`
  width: 658px;
  height: 750px;
  border: 1px solid black;
  background: #060e5f;
  border-radius: 35px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #000000;
  display: flex;
`;

export const TodoDataBlock = styled.div`
  width: 420px;
  // border: 1px solid white;
  max-height: 700px;

  overflow-y: overlay;
  margin: 20px 20px;
  background: #4a5ea5;
  border-radius: 35px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px;
`;
export const TodoDataBlockTitle = styled.div`
  font-family: "Verdana", "sans-serif";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 64px;
  color: white;
`;

export const MenuBlock = styled.div`
  padding-top: 50px;
  width: 200px;
`;

export const TodoDataTitle = styled.div`
  font-family: "Verdana", "sans-serif";
  color: #e6d9d9;
  font-size: 5px;
  padding-top: 20px;
`;
