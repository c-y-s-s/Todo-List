import { FC, useState, useEffect } from "react";
import * as Styles from "./style";
import Menu from "./components/Menu";
import UserData from "./components/UserData";
import TodoInput from "./components/TodoInput";
import Categories from "./components/Categories";
import TodoListData from "./components/TodoListData";
import { ITask } from "./interface";
import moment from "moment";
const TodoList: FC = () => {
  moment.locale("zh-tw"); // zh-tw
  const date = moment().format("YYYY-MM-DD");
  const time = moment().format("HH:mm:ss");
  const [todoData, setTodoData] = useState<ITask[]>((): any => {
    const saved = localStorage.getItem("LEO-todoList") as string;

    const initialValue = JSON.parse(saved);

    if (initialValue) {
      return initialValue || [];
    } else {
      return [
        {
          id: 0,
          text: "歡迎你來試用我的作品",
          category: "PENDING",
          date: date,
          time: time,
        },
      ];
    }
  });

  const [categoryToggle, setCategoryToggle] = useState<string>("ALL");
  const [loading, setLoading] = useState<boolean>(false);

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
            <TodoInput
              setTodoData={setTodoData}
              todoData={todoData}
              setLoading={setLoading}
              loading={loading}
            />
            <Categories
              setCategoryToggle={setCategoryToggle}
              categoryToggle={categoryToggle}
              todoData={todoData}
            />
            <Styles.TodoDataTitle>DAILY TASK MENU</Styles.TodoDataTitle>
            <TodoListData
              todoData={todoData}
              categoryToggle={categoryToggle}
              setTodoData={setTodoData}
              loading={loading}
            />
          </Styles.TodoDataBlock>
        </Styles.TodoListBlock>
      </Styles.GlobalBackground>
    </>
  );
};
export default TodoList;
