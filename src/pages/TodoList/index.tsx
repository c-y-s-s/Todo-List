import { FC, useState } from "react";
import * as Styles from "./style";
import Menu from "./components/Menu";
import UserData from "./components/UserData";
import TodoInput from "./components/TodoInput";
import Categories from "./components/Categories";
import TodoListData from "./components/TodoListData";
import { ITask } from "./interface";

const TodoList: FC = () => {
  const [todoData, setTodoData] = useState<ITask[]>([
    {
      id: 1,
      text: "1",
      category: "SOLVED",
      date: "2010",
    },
    {
      id: 2,
      text: "2",
      category: "SOLVED",
      date: "2010",
    },
    {
      id: 3,
      text: "3",
      category: "PENDING",
      date: "2010",
    },
    {
      id: 4,
      text: "4",
      category: "SOLVED",
      date: "2010",
    },
    {
      id: 5,
      text: "5",
      category: "PENDING",
      date: "2010",
    },
    {
      id: 6,
      text: "6",
      category: "PENDING",
      date: "2010",
    },
    {
      id: 7,
      text: "7",
      category: "PENDING",
      date: "2010",
    },
  ]);
  const [categoryToggle, setCategoryToggle] = useState<string>("ALL");

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
