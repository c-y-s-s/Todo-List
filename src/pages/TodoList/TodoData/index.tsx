import React, { FC } from "react";
import { Dayjs } from "dayjs";
import { ITask } from "../../interface";
import * as Styles from "./style";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import { useTransition, animated } from "react-spring";
interface Props {
  dateValue: Dayjs | null;
  data: ITask[];
  setData: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TodoData: FC<Props> = ({ dateValue, data, setData }) => {
  // 重組一個 date 格式要用來去比對原有 data 裡面的 date
  let newMonth: string | null = null;
  let newDay: string | null = null;
  let newDate: string = "";
  if (dateValue !== null) {
    newMonth =
      dateValue.month() + 1 > 9
        ? (dateValue.month() + 1).toString()
        : "0" + (dateValue.month() + 1).toString();
    newDay =
      dateValue.date() < 10
        ? "0" + dateValue.date().toString()
        : dateValue.date().toString();
    newDate = dateValue.year() + newMonth + newDay;
  }

  // 比對資料裡有沒有點到的日期
  const dataIsTheDate = data.some((item) => {
    return item.dateValue === newDate;
  });

  const transitions = useTransition(dateValue, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 100,
  });

  const handleDoneChange = (id: number): void => {
    setData(
      data.map((item) => {
        return item.id === id ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };
  return (
    <>
      <Styles.ContentContainer>
        <Styles.ContentBlock>
          {transitions((props) => (
            <animated.div
              style={{
                ...props,
              }}
            >
              {dataIsTheDate ? (
                React.Children.toArray(
                  data.map((item) => {
                    const labelId = item.id.toString();
                    return (
                      <>
                        {item.dateValue === newDate && (
                          <Styles.TextItem key={item.id}>
                            <Styles.TextItemBlock htmlFor={labelId}>
                              <Styles.CheckInput
                                type="checkbox"
                                id={labelId}
                                checked={item.isDone === true}
                                onChange={() => {
                                  handleDoneChange(item.id);
                                }}
                              />
                              <Styles.TextBlock>
                                <Styles.Text>{item.textValue}</Styles.Text>
                                <Styles.TextTime>
                                  at {item.timeValue}{" "}
                                </Styles.TextTime>
                              </Styles.TextBlock>
                            </Styles.TextItemBlock>
                          </Styles.TextItem>
                        )}
                      </>
                    );
                  })
                )
              ) : (
                <Styles.NoScheduleBlock>
                  <EventBusyIcon
                    sx={{
                      color: "#515070",
                      width: "100px",
                      height: "100px",
                      opacity: 0.5,
                    }}
                  />
                  <div>No Schedule Today</div>
                </Styles.NoScheduleBlock>
              )}
            </animated.div>
          ))}
        </Styles.ContentBlock>
      </Styles.ContentContainer>
    </>
  );
};

export default TodoData;
