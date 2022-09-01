import { FC, useState, useEffect } from "react";
import * as Styles from "./style";
import Menu from "./components/Menu";
import UserData from "./components/UserData";
import TodoInput from "./components/TodoInput";
import Categories from "./components/Categories";
import TodoListData from "./components/TodoListData";
import { ITask } from "./interface";
import { useLocalStorage } from "./components/Hooks";
const TodoList: FC = () => {
  // const [todoData, setTodoData] = useState<ITask[]>([]);
  const [todoData, setTodoData] = useState<ITask[]>(() => {
    const saved = localStorage.getItem("LEO-todoList") as string;
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  console.log(todoData, "aaa");

  const [categoryToggle, setCategoryToggle] = useState<string>("ALL");

  useEffect(() => {
    localStorage.setItem("LEO-todoList", JSON.stringify(todoData));
  }, [todoData]);
  return (
    <>
      <Styles.GlobalBackground>
        <Styles.TodoListBlock>
          <Styles.MenuBlock>
            <UserData />
            <Menu
              setCategoryToggle={setCategoryToggle}
              categoryToggle={categoryToggle}
            />
          </Styles.MenuBlock>
          <Styles.TodoDataBlock>
            <Styles.TodoDataBlockTitle>What's Up Leo</Styles.TodoDataBlockTitle>
            <TodoInput setTodoData={setTodoData} todoData={todoData} />
            <Categories
              setCategoryToggle={setCategoryToggle}
              categoryToggle={categoryToggle}
              todoData={todoData}
            />
            <Styles.TodoDataTitle>DAILY TASK MENU</Styles.TodoDataTitle>
            {/* {todoData.map((todoData: ITask) => {
              return (
                <TodoListData
                  todoData={todoData}
                  key={todoData.id}
                  categoryToggle={categoryToggle}
                />
              );
            })} */}
            <TodoListData
              todoData={todoData}
              categoryToggle={categoryToggle}
              setTodoData={setTodoData}
            />
          </Styles.TodoDataBlock>
        </Styles.TodoListBlock>
      </Styles.GlobalBackground>
    </>
  );
};
export default TodoList;
