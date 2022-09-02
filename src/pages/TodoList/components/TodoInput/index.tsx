import React, { useState, ChangeEvent, useRef } from "react";
import { ITask } from "../../interface";
import * as Styles from "./style";
import moment from "moment";

interface TodoInputProps {
  setTodoData: React.Dispatch<React.SetStateAction<ITask[]>>;
  todoData: ITask[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

const TodoInput: React.FC<TodoInputProps> = ({
  setTodoData,
  todoData,
  setLoading,
  loading,
}) => {
  moment.locale("zh-tw"); // zh-tw
  const date = moment().format("YYYY-MM-DD");
  const time = moment().format("HH:mm:ss");
  const [inputValue, setValue] = useState<string>("");
  const dataId = useRef<number>(todoData.length + 1);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleClick(): void {
    if (inputValue === "") return;

    setLoading(true);

    if (!loading) {
      setTimeout(() => {
        setTodoData([
          {
            id: dataId.current,
            text: inputValue,
            category: "PENDING",
            date: date,
            time: time,
          },
          ...todoData,
        ]);

        setLoading(false);
      }, 800);
      dataId.current += 1;
    }

    setValue("");
  }

  function handleInputKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      if (inputValue === "") return;

      setLoading(true);

      if (!loading) {
        setTimeout(() => {
          setTodoData([
            {
              id: dataId.current,
              text: inputValue,
              category: "PENDING",
              date: date,
              time: time,
            },
            ...todoData,
          ]);

          setLoading(false);
        }, 800);
        dataId.current += 1;
      }

      setValue("");
    }
  }
  return (
    <>
      <Styles.TodoInputBlock>
        <Styles.Input
          type="text"
          placeholder="Task"
          onChange={handleChange}
          onKeyUp={handleInputKeyUp}
          value={inputValue}
        />
        <Styles.TodoTextButton onClick={handleClick}>
          Send
        </Styles.TodoTextButton>
      </Styles.TodoInputBlock>
    </>
  );
};

export default TodoInput;
