import { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import DatePicker from "./DatePicker";
import TodoData from "./TodoData";
import Footer from "./Footer";
import dayjs, { Dayjs } from "dayjs";
import TodoAllData from "./TodoAllData";
import { useTransition, animated } from "react-spring";
import { ITask } from "../interface";

const Container = styled.div`
  height: 100vh;
`;

export default function TodoList() {
  const [data, setData] = useState<ITask[]>([
    {
      id: 0,
      textValue: "20220930",
      dateValue: "20220930",
      timeValue: "05:30",
      isDone: false,
    },
  ]);

  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const [pageToggleSwitch, setToggleSwitch] = useState<boolean>(true);

  const transitions = useTransition(pageToggleSwitch, {
    from: { opacity: 0, transform: "translate(0,75px)" },
    enter: { opacity: 1, transform: "translate(0px, 0px)" },
    delay: 0,
  });
  console.log(pageToggleSwitch, "a");
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
              <TodoData dateValue={dateValue} data={data} />
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
              <TodoAllData pageToggleSwitch={pageToggleSwitch} data={data} />
            </animated.div>
          ))}
        </>
      )}

      <Footer setToggleSwitch={setToggleSwitch}></Footer>
    </Container>
  );
}
