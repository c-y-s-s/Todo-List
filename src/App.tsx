import React from "react";
import { FC } from "react";
import TodoList from "./pages/TodoList";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";
const App: FC = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <TodoList />
      </StyledEngineProvider>
    </>
  );
};

export default App;
