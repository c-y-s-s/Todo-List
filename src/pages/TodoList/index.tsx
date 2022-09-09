import { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "./Title";
import DatePicker from "./DatePicker";
import TodoData from "./TodoData";
import Footer from "./Footer";
import dayjs, { Dayjs } from "dayjs";
import TodoAllData from "./TodoAllData";
import { useTransition, animated } from "react-spring";
import { ITask } from "../interface";

import moment from "moment";
const Container = styled.div`
  height: 100vh;
`;

export default function TodoList() {
  const TodayDate = moment()
    .format("YYYY-MM-DD")
    .replace("-", "")
    .replace("-", "");

  const [data, setData] = useState<ITask[]>((): any => {
    const saved = localStorage.getItem("LEO-DateTodoList") as string;

    const initialValue = JSON.parse(saved);

    if (initialValue) {
      return initialValue || [];
    } else {
      return [
        {
          id: 0,
          textValue: `歡迎試用我的作品^_^`,
          dateValue: TodayDate,
          timeValue: "06:03",
          isDone: false,
        },
      ];
    }
  });

  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const [pageToggleSwitch, setToggleSwitch] = useState<boolean>(true);

  const transitions = useTransition(pageToggleSwitch, {
    from: { opacity: 0, transform: "translate(0,75px)" },
    enter: { opacity: 1, transform: "translate(0px, 0px)" },
    delay: 0,
  });

  useEffect(() => {
    localStorage.setItem("LEO-DateTodoList", JSON.stringify(data));
  }, [data]);
  return (
    <Container>
      <Title setData={setData} data={data} />
      {pageToggleSwitch ? (
        <>
          {transitions((props) => (
            <animated.div
              style={{
                ...props,
              }}
            >
              <DatePicker
                data={data}
                setData={setData}
                dateValue={dateValue}
                setDateValue={setDateValue}
              />
              <TodoData dateValue={dateValue} data={data} setData={setData} />
            </animated.div>
          ))}
        </>
      ) : (
        <>
          {transitions((props) => (
            <animated.div
              style={{
                ...props,
              }}
            >
              <TodoAllData data={data} setData={setData} />
            </animated.div>
          ))}
        </>
      )}

      <Footer
        setToggleSwitch={setToggleSwitch}
        pageToggleSwitch={pageToggleSwitch}
      ></Footer>
    </Container>
  );
}
