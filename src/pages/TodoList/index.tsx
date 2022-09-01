import { FC } from "react";
import * as Styles from "./style";
import Menu from "./components/Menu";
import UserData from "./components/UserData";
import TodoInput from "./components/TodoInput";
import Categories from "./components/Categories";
import TodoDatas from "./components/TodoDatas";

const TodoList: FC = () => {
  return (
    <>
      <Styles.GlobalBackground>
        <Styles.TodoListBlock>
          <Styles.MenuBlock>
            <UserData />
            <Menu />
          </Styles.MenuBlock>
          <Styles.TodoDataBlock>
            <Styles.TodoDataBlockTitle>What's Up Leo</Styles.TodoDataBlockTitle>
            <TodoInput />
            <Categories />
            <TodoDatas />
          </Styles.TodoDataBlock>
        </Styles.TodoListBlock>
      </Styles.GlobalBackground>
    </>
  );
};
export default TodoList;
