import React, { FC } from "react";
import { ITask } from "../../interface";
import * as Styles from "./style";
interface Props {
  data: ITask[];
  setData: React.Dispatch<React.SetStateAction<ITask[]>>;
}

// data 日期分類
const TodoAllData: FC<Props> = ({ data, setData }) => {
  const newData = data.reduce<Record<string, ITask[]>>((result, item) => {
    result[item.dateValue] = result[item.dateValue] || [];
    result[item.dateValue].push(item);
    return result;
  }, {});
  const result = Object.values(newData).reverse();

  const handleDoneChange = (id: number): void => {
    setData(
      data.map((item) => {
        return item.id === id ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };
  return (
    <>
      <Styles.TodoAll>
        <Styles.TodoAllContainer>
          <Styles.TodoAllBlock>
            {React.Children.toArray(
              result.map((item) => {
                return (
                  <>
                    <Styles.TodoAllDate key={item[0].id}>
                      {item[0].dateValue}
                    </Styles.TodoAllDate>
                    {item.map((item) => {
                      return (
                        <Styles.TodoAllTextItem key={item.id}>
                          <Styles.TodoAllCheckInput
                            type="checkbox"
                            checked={item.isDone === true}
                            onChange={() => {
                              handleDoneChange(item.id);
                            }}
                          />
                          <Styles.TodoAllTextBlock>
                            <Styles.TodoAllText>
                              {item.textValue}
                            </Styles.TodoAllText>
                            <Styles.TodoAllTextTime>
                              at {item.timeValue}
                            </Styles.TodoAllTextTime>
                          </Styles.TodoAllTextBlock>
                        </Styles.TodoAllTextItem>
                      );
                    })}
                  </>
                );
              })
            )}
          </Styles.TodoAllBlock>
        </Styles.TodoAllContainer>
      </Styles.TodoAll>
    </>
  );
};

export default TodoAllData;
