import React from "react";
import { ITask } from "../../interface";
import ReactLoading from "react-loading";
import { useTransition, animated } from "react-spring";
import * as Styles from "./style";
interface TodoListDataProps {
  todoData: ITask[];
  categoryToggle: string;
  setTodoData: React.Dispatch<React.SetStateAction<ITask[]>>;
  loading?: boolean;
}

const TodoListData: React.FC<TodoListDataProps> = ({
  todoData,
  categoryToggle,
  setTodoData,
  loading,
}) => {
  const transitions = useTransition(categoryToggle, {
    from: { opacity: 0, transform: "translate(0px, 50px)" },
    enter: { opacity: 1, transform: "translate(0px, 0px)" },
    delay: 250,
  });

  function handleDelete(id: number): void {
    setTodoData(
      todoData.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function handleCategoryChange(id: number): void {
    setTodoData(
      todoData.map((item) => {
        let categoryToggle = item.category === "SOLVED" ? true : false;

        return item.id === id
          ? { ...item, category: categoryToggle ? "PENDING" : "SOLVED" }
          : item;
      })
    );
  }

  return (
    <>
      {loading ? (
        <Styles.LoadingBlock>
          <ReactLoading
            type={"spokes"}
            color={"#fff"}
            height={"20%"}
            width={"20%"}
          />
        </Styles.LoadingBlock>
      ) : categoryToggle === "ALL" ? (
        todoData.map((item) => {
          return transitions((props) => (
            <animated.div
              style={{
                ...props,
              }}
            >
              <Styles.TodoLastingBlock>
                <Styles.TodoDate>{item.date}</Styles.TodoDate>
                <Styles.TodoDate>{item.time}</Styles.TodoDate>
              </Styles.TodoLastingBlock>
              <Styles.TodoDataItem>
                <Styles.TodoDataContentBlock>
                  <Styles.TodoDataItemCheck>
                    <Styles.Input
                      type="checkbox"
                      checked={item.category === "SOLVED"}
                      onChange={() => {
                        handleCategoryChange(item.id);
                      }}
                    />
                  </Styles.TodoDataItemCheck>
                  <Styles.TodoDataItemText>{item.text}</Styles.TodoDataItemText>
                </Styles.TodoDataContentBlock>
                <Styles.TodoDataDelete
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  X
                </Styles.TodoDataDelete>
              </Styles.TodoDataItem>
            </animated.div>
          ));
        })
      ) : (
        todoData
          .filter((item) => {
            return item.category === categoryToggle;
          })

          .map((item) => {
            return transitions((props) => (
              <animated.div
                style={{
                  ...props,
                }}
              >
                <Styles.TodoLastingBlock>
                  <Styles.TodoDate>{item.date}</Styles.TodoDate>
                  <Styles.TodoDate>{item.time}</Styles.TodoDate>
                </Styles.TodoLastingBlock>

                <Styles.TodoDataItem>
                  <Styles.TodoDataContentBlock>
                    <Styles.TodoDataItemCheck>
                      <Styles.Input
                        type="checkbox"
                        checked={item.category === "SOLVED"}
                        onChange={() => {
                          handleCategoryChange(item.id);
                        }}
                      />
                    </Styles.TodoDataItemCheck>
                    <Styles.TodoDataItemText>
                      {item.text}
                    </Styles.TodoDataItemText>
                  </Styles.TodoDataContentBlock>
                  <Styles.TodoDataDelete
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    X
                  </Styles.TodoDataDelete>
                </Styles.TodoDataItem>
              </animated.div>
            ));
          })
      )}
    </>
  );
};

export default TodoListData;
