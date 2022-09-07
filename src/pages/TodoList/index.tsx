import { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import DatePicker from "./DatePicker";
import TodoData from "./TodoData";
import Footer from "./Footer";
import dayjs, { Dayjs } from "dayjs";
import TodoAllData from "./TodoAllData";
import { useTransition, animated } from "react-spring";
export interface ITask {
  text: string;
  isDone: Boolean;
  isDate: string;
}
const Container = styled.div`
  height: 100vh;
`;

export default function TodoList() {
  const [data, setData] = useState<ITask[]>([
    {
      text: "20220930",
      isDone: true,
      isDate: "20220930",
    },
    {
      text: "20220930",
      isDone: true,
      isDate: "20220930",
    },
    {
      text: "20220919",
      isDone: true,
      isDate: "20220919",
    },
    {
      text: "20220831",
      isDone: true,
      isDate: "20220831",
    },
    {
      text: "20220707",
      isDone: true,
      isDate: "20220707",
    },
  ]);

  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const [pageToggleSwitch, setToggleSwitch] = useState<boolean>(true);

  const transitions = useTransition(pageToggleSwitch, {
    from: { opacity: 0, transform: "translate(0,75px)" },
    enter: { opacity: 1, transform: "translate(0px, 0px)" },
    delay: 150,
  });
  return (
    <Container>
      <Title />
      {pageToggleSwitch ? (
        <>
          {transitions((props, item) => (
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
              <TodoData dateValue={dateValue} data={data} />
            </animated.div>
          ))}
        </>
      ) : (
        <TodoAllData pageToggleSwitch={pageToggleSwitch} data={data} />
      )}

      <Footer setToggleSwitch={setToggleSwitch}></Footer>
    </Container>
  );
}
